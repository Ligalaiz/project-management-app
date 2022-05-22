import React, { ChangeEvent, useState, MouseEvent } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import { color } from '@src/styles';
import { Tasks } from '@components/Tasks';
import { IDefaultColumns } from '@src/store/board/Board.types';
import { Modal } from '@components/Modal';
import { Submenu } from '@components/Submenu';
import { useAction } from '@src/hooks/useAction';
import * as c from './Column.style';

const Column = React.forwardRef((props: IDefaultColumns, ref) => {
  const { column, handleDrag } = props;
  const { editColumn } = useAction();
  const [isModal, SetIstModal] = useState(false);
  const [isSubmenu, SetIsSubmenu] = useState(false);
  const [isTitle, setIsTitle] = useState(false);
  const [modalType, setModalType] = useState('');
  const [titleValue, setTitleValue] = useState(column!.title || '');
  const controls = useDragControls();

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
      SetIstModal(!isModal);
      setModalType('atask');
    }
    if (type === 'columnEdit') {
      SetIstModal(true);
      setModalType('ecolumn');
    }
    if (type === 'columnDelete') {
      SetIstModal(true);
      setModalType('dcolumn');
    }
  };

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

  const handleClickTitle = () => {
    setIsTitle(true);
  };

  const handleBlur = () => {
    if (titleValue?.length > 3 && column) {
      const columnEdit = {
        title: titleValue,
        type: titleValue,
      };
      editColumn({ columnEdit, columnId: column.id });
    }
    setIsTitle(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const castEvent = event as unknown as ChangeEvent<HTMLInputElement>;
    setTitleValue(castEvent.target.value);
  };

  const dragStyle = {
    border: '1px solid blue',
    borderColor: `${color['blue-color']}`,
    boxShadow: `0 0 0 0.2rem ${color['blue-color-light-X1']}`,
  };

  return (
    <>
      <Reorder.Item
        value={column}
        css={c.columnList}
        drag
        ref={ref}
        dragListener={false}
        dragControls={controls}
        whileDrag={dragStyle}
        onDragEnd={handleDrag}
      >
        <div css={c.boardWrap}>
          <div css={c.titleWrap} onPointerDown={(e) => controls.start(e)}>
            <div css={c.title}>
              <div css={c.taskCountWrap}>
                <span css={c.taskCount}>{column?.items.length}</span>
              </div>
              {!isTitle && <div onClick={handleClickTitle}>{column.title}</div>}
              {isTitle && (
                <input css={c.columnTitle} type="text" value={titleValue} onBlur={handleBlur} onChange={handleChange} />
              )}
            </div>
            <div css={c.menu}>
              <button type="button" css={c.addBtn} onClick={handleCloseModal} data-type="close">
                +
              </button>
              <button type="button" data-type="submenu" css={c.menuBtn} onClick={handleCloseSubmenu} />
              {isSubmenu && <Submenu target="column" handleClose={handleCloseModal} />}
            </div>
          </div>
          <Tasks column={column} />
        </div>
      </Reorder.Item>
      {isModal && <Modal type={modalType} handleClose={handleCloseModal} column={column} />}
    </>
  );
});

export { Column };
