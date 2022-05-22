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
} from './Board.types';

const boardReducer = {
  setPositionColumns: (state: IInitialBoardState, action: PayloadAction<IColumnPosition[]>) => {
    state.columnsPosition = [...action.payload];
  },

  setPositionBoard: (state: IInitialBoardState, action: PayloadAction<SetBoardPositionAction>) => {
    state.boardPosition = action.payload.boardPosition;
  },

  reorderColumns: (state: IInitialBoardState, action: PayloadAction<IColumns[]>) => {
    state.columns = [...action.payload];
  },

  reorderTasks: (state: IInitialBoardState, action: PayloadAction<IReorder>) => {
    const { tasks, id } = action.payload;
    const ind = state.columns.findIndex((item) => item.id === id);

    state.columns[ind].items = [...tasks];
  },

  removeColumn: (state: IInitialBoardState, action: PayloadAction<number>) => {
    state.columns = [...state.columns.filter((column) => column.id !== action.payload)];
  },

  editColumn: (state: IInitialBoardState, action: PayloadAction<IEditColumn>) => {
    const { columnEdit, columnId } = action.payload;

    state.columns = [
      ...state.columns.map((column) => {
        if (column.id === columnId) {
          return { ...column, ...columnEdit };
        }
        return column;
      }),
    ];
  },

  removeTask: (state: IInitialBoardState, action: PayloadAction<IRemoveTask>) => {
    const { taskId, columnId } = action.payload;
    const ind = state.columns.findIndex((item) => item.id === columnId);

    state.columns[ind].items = [...state.columns[ind].items.filter((item) => item.id !== taskId)];
  },

  setTask: (state: IInitialBoardState, action: PayloadAction<ISetTask>) => {
    const { task, targetColumn } = action.payload;
    const ind = state.columns.findIndex((item) => item.id === targetColumn);

    state.columns[ind].items = [{ ...task, type: state.columns[ind].type }, ...state.columns[ind].items];
  },

  editTask: (state: IInitialBoardState, action: PayloadAction<IEditTask>) => {
    const { task, targetTask, targetColumn } = action.payload;
    const ind = state.columns.findIndex((item) => item.id === targetColumn);

    state.columns[ind].items = [
      ...state.columns[ind].items.map((item) => {
        if (item.id === targetTask) {
          return { ...item, ...task };
        }
        return item;
      }),
    ];
  },

  setTaskCount: (state: IInitialBoardState, action: PayloadAction<number>) => {
    state.tasksCount = action.payload;
  },

  setColumnCount: (state: IInitialBoardState, action: PayloadAction<number>) => {
    state.columnCount = action.payload;
  },

  setColumn: (state: IInitialBoardState, action: PayloadAction<IColumns>) => {
    state.columns = [...state.columns, action.payload];
  },

  setError: (state: IInitialBoardState, action: PayloadAction<SetErrorAction>) => {
    state.error = action.payload.error;
  },
};

export { boardReducer };
