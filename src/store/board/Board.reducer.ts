import { PayloadAction } from '@reduxjs/toolkit';

import {
  IInitialBoardState,
  IColumns,
  ISetTask,
  SetBoardPositionAction,
  IReorder,
  SetErrorAction,
  IColumnPosition,
  IRemoveTask,
  IEditColumn,
  IEditTask,
  IBoard,
  IEditBoard,
} from './Board.types';

const boardReducer = {
  setPositionColumns: (state: IInitialBoardState, action: PayloadAction<IColumnPosition[]>) => {
    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        item.columnsPosition = [...action.payload];
      }
    });
  },

  setPositionBoard: (state: IInitialBoardState, action: PayloadAction<SetBoardPositionAction>) => {
    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        item.boardPosition = action.payload.boardPosition;
      }
    });
  },

  reorderColumns: (state: IInitialBoardState, action: PayloadAction<IColumns[]>) => {
    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        item.columns = [...action.payload];
      }
    });
  },

  reorderTasks: (state: IInitialBoardState, action: PayloadAction<IReorder>) => {
    const { tasks, id } = action.payload;

    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        const ind = item.columns.findIndex((column) => column.id === id);
        item.columns[ind].items = [...tasks];
      }
    });
  },

  removeColumn: (state: IInitialBoardState, action: PayloadAction<number>) => {
    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        item.columns = [...item.columns.filter((column) => column.id !== action.payload)];
      }
    });
  },

  editColumn: (state: IInitialBoardState, action: PayloadAction<IEditColumn>) => {
    const { columnEdit, columnId } = action.payload;

    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        item.columns = [
          ...item.columns.map((column) => {
            if (column.id === columnId) {
              return { ...column, ...columnEdit };
            }
            return column;
          }),
        ];
      }
    });
  },

  removeTask: (state: IInitialBoardState, action: PayloadAction<IRemoveTask>) => {
    const { taskId, columnId } = action.payload;

    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        const ind = item.columns.findIndex((column) => column.id === columnId);

        item.columns[ind].items = [...item.columns[ind].items.filter((column) => column.id !== taskId)];
      }
    });
  },

  setTask: (state: IInitialBoardState, action: PayloadAction<ISetTask>) => {
    const { task, targetColumn } = action.payload;

    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        const ind = item.columns.findIndex((column) => column.id === targetColumn);
        item.columns[ind].items = [{ ...task, type: item.columns[ind].type }, ...item.columns[ind].items];
      }
    });
  },

  editTask: (state: IInitialBoardState, action: PayloadAction<IEditTask>) => {
    const { task, targetTask, targetColumn } = action.payload;

    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        const ind = item.columns.findIndex((column) => column.id === targetColumn);

        item.columns[ind].items = [
          ...item.columns[ind].items.map((curTask) => {
            if (curTask.id === targetTask) {
              return { ...curTask, ...task };
            }
            return curTask;
          }),
        ];
      }
    });
  },

  setTaskCount: (state: IInitialBoardState, action: PayloadAction<number>) => {
    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        item.tasksCount = action.payload;
      }
    });
  },

  setColumnCount: (state: IInitialBoardState, action: PayloadAction<number>) => {
    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        item.columnCount = action.payload;
      }
    });
  },

  setColumn: (state: IInitialBoardState, action: PayloadAction<IColumns>) => {
    state.boards.forEach((item) => {
      if (item.id === state.boardId) {
        item.columns = [...item.columns, action.payload];
      }
    });
  },

  createBoard: (state: IInitialBoardState, action: PayloadAction<IBoard>) => {
    state.boards = [action.payload, ...state.boards];
  },

  setBoard: (state: IInitialBoardState, action: PayloadAction<number>) => {
    state.boardId = action.payload;
  },

  delBoard: (state: IInitialBoardState, action: PayloadAction<number>) => {
    state.boards = [...state.boards.filter((board) => board.id !== action.payload)];
  },

  editBoard: (state: IInitialBoardState, action: PayloadAction<IEditBoard>) => {
    const { id, ...board } = action.payload;

    state.boards = [
      ...state.boards.map((item) => {
        if (item.id === id) {
          return { ...item, ...board };
        }
        return item;
      }),
    ];
  },

  setFilter: (state: IInitialBoardState, action: PayloadAction<boolean>) => {
    state.filter = action.payload;
  },

  setSearch: (state: IInitialBoardState, action: PayloadAction<string>) => {
    state.searchQuery = action.payload;
  },

  setSortType: (state: IInitialBoardState, action: PayloadAction<string>) => {
    state.sortType = action.payload;
  },

  setError: (state: IInitialBoardState, action: PayloadAction<SetErrorAction>) => {
    state.error = action.payload.error;
  },
};

export { boardReducer };
