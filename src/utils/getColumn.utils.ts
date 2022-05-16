import { IGetColumn } from '@src/store/board/Board.types';

const getColumn = ({ target, columns, boardPosition }: IGetColumn) => {
  const countColumns = columns.length;
  const columnWidth = Math.round((boardPosition?.width || 0) / countColumns);

  const columnsPositionArr = [...Array(countColumns)].map((_, ind) => ({
    width: columnWidth,
    top: boardPosition?.top ?? 0,
    right:
      ind === 0
        ? (boardPosition?.left || 0) + columnWidth
        : (boardPosition?.left || 0) + 5 * ind + columnWidth * (ind + 1),
    left: ind === 0 ? boardPosition?.left || 0 : (boardPosition?.left || 0) + (5 + columnWidth) * ind,
    bottom: boardPosition?.bottom ?? 0,
  }));

  let result = 0;
  columnsPositionArr.forEach((item, ind) => {
    if (target >= item.left && target <= item.right) {
      result = ind;
    }
  });
  return result;
};

export { getColumn };
