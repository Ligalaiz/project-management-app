import React, { FC, useRef } from 'react';
import { Reorder } from 'framer-motion';
import { color } from '@src/styles';
import { Tasks } from '@components/Tasks';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { IColumns } from '@src/store/board/Board.types';
import * as c from './Column.style';

interface IDefaultColumns {
  column: IColumns;
}
const Column: FC<IDefaultColumns> = ({ column }) => {
  const { tasks } = useTypedUseSelector((state) => state.board);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Reorder.Item
      value={column}
      css={c.columnList}
      style={{ minWidth: '353px' }}
      whileDrag={{
        border: '1px solid blue',
        borderColor: `${color['blue-color']}`,
        boxShadow: `0 0 0 0.2rem ${color['blue-color-light-X1']}`,
      }}
    >
      <div css={c.boardWrap} ref={ref}>
        <div css={c.titleWrap}>
          <div css={c.title}>
            <div css={c.taskCountWrap}>
              <span css={c.taskCount}>{tasks?.[column?.type].length ?? 0}</span>
            </div>
            <div>{column.title}</div>
          </div>
          <div css={c.menu}>
            <button type="button" css={c.addBtn}>
              +
            </button>
            <button type="button" css={c.menuBtn} />
          </div>
        </div>
        <Tasks column={column} />
      </div>
    </Reorder.Item>
  );
};

export { Column };
