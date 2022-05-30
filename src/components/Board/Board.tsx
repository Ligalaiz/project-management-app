import React, { MouseEvent, useRef, useEffect, useState } from 'react';
import { Reorder, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { IColumns, IPositionArr, IColumnRef } from '@src/store/board/Board.types';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { Button } from '@components/Button';
import { Column } from '@components/Column';
import { Modal } from '@components/Modal';
import NotFoundPage from '@components/NotFoundPage';
import * as b from './Board.style';

function positionArr({ columns, columnsRef }: IPositionArr) {
  return columns.map((item) => {
    return { id: item.id, position: columnsRef.current[item.id]?.getBoundingClientRect() };
  });
}

const Board = () => {
  const { boards, boardId } = useTypedUseSelector((state) => state.board);
  const { reorderColumns, setPositionBoard, setPositionColumns } = useAction();
  const boardRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<IColumnRef>({});
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);

  const board = boards.find((item) => item.id === boardId);
  const columns = board?.columns;

  useEffect(() => {
    if (boardRef?.current && columns) {
      const rect = boardRef?.current?.getBoundingClientRect();

      setPositionBoard({ boardPosition: rect });
      setPositionColumns(positionArr({ columns, columnsRef }));
      boardRef?.current?.addEventListener('scroll', handleScroll);
    }
  }, [columns]);

  if (!columns) return <NotFoundPage />;

  const handleScroll = () => {
    setPositionColumns(positionArr({ columns, columnsRef }));
  };

  const handleDrag = () => {
    setPositionColumns(positionArr({ columns, columnsRef }));
  };

  const handleCloseModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const {
      dataset: { type },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
      };
    };

    if (type === 'close') {
      setIsModal(!isModal);
    } else {
      setIsModal(false);
    }
  };

  return (
    <main css={b.boardMain}>
      <div className="container">
        <Button title="Back main" handleClick={() => navigate('/')} />
        <Button title="Add Column" handleClick={handleCloseModal} dataType="close" />
      </div>
      <div css={b.boardWrap}>
        <Reorder.Group as="ol" axis="x" values={columns} css={b.board} onReorder={reorderColumns} ref={boardRef}>
          {columns.map((column: IColumns, ind) => (
            <AnimatePresence key={column.id} initial={false}>
              <Column
                column={column}
                board={board}
                handleDrag={handleDrag}
                ref={(el: HTMLDivElement) => {
                  columnsRef.current[column.id] = el;
                  return columnsRef.current[ind];
                }}
              />
            </AnimatePresence>
          ))}
        </Reorder.Group>
      </div>
      {isModal && <Modal board={board} type="acolumn" handleClose={handleCloseModal} />}
    </main>
  );
};

export default Board;
