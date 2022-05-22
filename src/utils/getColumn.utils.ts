import { IGetColumn } from '@src/store/board/Board.types';

const getColumn = ({ target, columnsPosition }: IGetColumn) => {
  let result = null;

  columnsPosition.forEach((item) => {
    const {
      id,
      position: { left, right },
    } = item;

    if (left && right) {
      if (target >= left && target <= right) {
        result = id;
      }
    }
  });
  return result;
};

export { getColumn };
