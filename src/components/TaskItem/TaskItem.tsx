import React, { MouseEvent, FC, useRef, useState } from 'react';
import { Reorder } from 'framer-motion';
import { ITaskItem, IHandleDragEnd } from '@src/store/board/Board.types';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { getColumn } from '@src/utils';
import { Submenu } from '@components/Submenu';
import { Modal } from '@components/Modal';
import { color } from '@src/styles';
import * as t from './TaskItem.style';

const variants = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
};

const TaskItem: FC<ITaskItem> = ({ task, column }) => {
  const { boards, boardId } = useTypedUseSelector((state) => state.board);
  const { removeTask, setTask } = useAction();
  const [isSubmenu, SetIsSubmenu] = useState(false);
  const [isModal, SetIsModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const board = boards.find((item) => item.id === boardId);
  if (!board) return null;

  const boardPosition = board?.boardPosition;
  const columnsPosition = board?.columnsPosition;

  const handleCloseSubmenu = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const {
      dataset: { type },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
      };
    };

    if (type === 'submenu') {
      SetIsSubmenu(!isSubmenu);
    } else {
      SetIsSubmenu(false);
    }
  };

  const handleCloseModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    handleCloseSubmenu(e);

    const {
      dataset: { type },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
      };
    };

    if (type === 'close') {
      SetIsModal(!isModal);
    }

    if (type === 'taskEdit') {
      setModalType('etask');
      SetIsModal(true);
    }

    if (type === 'taskDelete') {
      setModalType('dtask');
      SetIsModal(true);
    }
  };

  const handleDragEnd = (event: globalThis.MouseEvent | TouchEvent | PointerEvent, info: IHandleDragEnd) => {
    const {
      point: { x, y },
    } = info;

    if (boardPosition) {
      const { left, right, top, bottom } = boardPosition;

      if (x >= left && x <= right && y >= top && y <= bottom) {
        const targetColumn = getColumn({ target: x, columnsPosition });

        if ((targetColumn || targetColumn === 0) && column.id !== targetColumn) {
          removeTask({ taskId: task.id, columnId: column.id });
          setTask({ task, targetColumn });
        }
      }
    }
  };

  return (
    <>
      <Reorder.Item
        value={task}
        css={t.task}
        drag
        whileDrag={{
          zIndex: '1000',
          position: 'absolute',
          border: '1px solid blue',
          borderColor: `${color['blue-color']}`,
          boxShadow: `0 0 0 0.2rem ${color['blue-color-light-X1']}`,
        }}
        onDragEnd={handleDragEnd}
        {...variants}
      >
        <div css={t.taskMenu} ref={ref}>
          <div css={t.taskTitle}>{task.title}</div>
          <button
            type="button"
            data-type="submenu"
            css={isSubmenu ? t.taskMenuBtnActive : t.taskMenuBtn}
            onClick={handleCloseSubmenu}
          />
          {isSubmenu && <Submenu target="task" handleClose={handleCloseModal} />}
        </div>
        <div>{task.content}</div>
        <div css={t.executorWrap}>
          Add by{' '}
          <a href="/#" css={t.executor}>
            Creator {task?.creator?.name}
          </a>{' '}
          <a href="/#" css={t.executor}>
            Executor {task?.executor?.name}
          </a>
        </div>
      </Reorder.Item>
      {isModal && <Modal board={board} type={modalType} handleClose={handleCloseModal} column={column} task={task} />}
    </>
  );
};

export { TaskItem };
