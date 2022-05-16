import { PayloadAction } from '@reduxjs/toolkit';

import {
  IInitialBoardState,
  SetPositionColumnsAction,
  IColumns,
  ITask,
  SetBoardPositionAction,
  IReorder,
  SetErrorAction,
} from './Board.types';

interface IRemoveTask {
  id: number;
  status: string;
}

interface ISetTask {
  task: ITask;
  status: string;
}

const boardReducer = {
  setPositionColumns: (state: IInitialBoardState, action: PayloadAction<SetPositionColumnsAction>) => {
    state.columsPosition = [...state.columsPosition, action.payload.columsPosition];
  },
  setPositionBoard: (state: IInitialBoardState, action: PayloadAction<SetBoardPositionAction>) => {
    state.boardPosition = action.payload.boardPosition;
  },
  reorderColumns: (state: IInitialBoardState, action: PayloadAction<IColumns[]>) => {
    state.columns = [...action.payload];
  },

  reorderTasks: (state: IInitialBoardState, action: PayloadAction<IReorder>) => {
    const { tasks, type } = action.payload;
    state.tasks[type] = [...tasks];
  },

  removeTask: (state: IInitialBoardState, action: PayloadAction<IRemoveTask>) => {
    const { id, status } = action.payload;
    state.tasks[status] = state.tasks[status].filter((item) => item.id !== id);
  },

  setTask: (state: IInitialBoardState, action: PayloadAction<ISetTask>) => {
    const { task, status } = action.payload;
    state.tasks[status] = [task, ...state.tasks[status]];
  },

  setDragStartPosition: (state: IInitialBoardState, action: PayloadAction<string>) => {
    state.dragStartPosition = action.payload;
  },

  setError: (state: IInitialBoardState, action: PayloadAction<SetErrorAction>) => {
    state.error = action.payload.error;
  },
};

export { boardReducer };
