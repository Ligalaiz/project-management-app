import React, { FC, useRef } from 'react';
import { Reorder } from 'framer-motion';
import { color } from '@src/styles';
import { ITaskItem } from '@src/store/board/Board.types';
import { useAction } from '@src/hooks/useAction';
import { getColumn } from '@src/utils';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import * as t from './TaskItem.style';

const variants = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
};

const TaskItem: FC<ITaskItem> = ({ task }) => {
  const { boardPosition, dragStartPosition, columns } = useTypedUseSelector((state) => state.board);
  const { removeTask, setDragStartPosition, setTask } = useAction();
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Reorder.Item
      value={task}
      css={t.task}
      drag
      whileDrag={{
        position: 'absolute',
        border: '1px solid blue',
        borderColor: `${color['blue-color']}`,
        boxShadow: `0 0 0 0.2rem ${color['blue-color-light-X1']}`,
      }}
      onDragStart={() => {
        const rect = ref?.current?.getBoundingClientRect();

        if (boardPosition && rect) {
          const indColumn = getColumn({ target: rect.x, columns, boardPosition });
          setDragStartPosition(columns[indColumn]?.type);
        }
      }}
      onDragEnd={() => {
        const rect = ref?.current?.getBoundingClientRect();

        if (boardPosition && rect && dragStartPosition) {
          const indColumn = getColumn({ target: rect.x, columns, boardPosition });

          if (columns[indColumn].type !== dragStartPosition) {
            removeTask({ id: task.id, status: dragStartPosition });
            setTask({ task: { ...task, status: columns[indColumn]?.type }, status: columns[indColumn]?.type });
          }
        }
      }}
      {...variants}
    >
      <div css={t.taskMenu} ref={ref}>
        <div css={t.taskTitle}>{task.title}</div>
        <button type="button" css={t.taskMenuBtn} />
      </div>
      <div css={t.executorWrap}>
        Add by{' '}
        <a href="/#" css={t.executor}>
          Ligalaiz
        </a>
      </div>
    </Reorder.Item>
  );
};

export { TaskItem };
