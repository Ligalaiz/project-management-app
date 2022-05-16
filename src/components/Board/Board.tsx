import React, { useRef, useEffect } from 'react';
import { Reorder, AnimatePresence } from 'framer-motion';
import { Column } from '@components/Column';
import { IColumns } from '@src/store/board/Board.types';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import * as b from './Board.style';

const Board = () => {
  const { columns } = useTypedUseSelector((state) => state.board);
  const { reorderColumns, setPositionBoard } = useAction();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref?.current) {
      const rect = ref?.current?.getBoundingClientRect();
      setPositionBoard({ boardPosition: rect });
    }
  }, []);

  return (
    <Reorder.Group as="ol" axis="x" drag values={columns} css={b.board} onReorder={reorderColumns} ref={ref}>
      {columns.map((column: IColumns) => (
        <AnimatePresence key={column.id} initial={false}>
          <Column column={column} />
        </AnimatePresence>
      ))}
    </Reorder.Group>
  );
};

export default Board;
