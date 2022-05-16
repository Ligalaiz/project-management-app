import { createSlice } from '@reduxjs/toolkit';

import { IInitialBoardState } from './Board.types';
import { boardReducer } from './Board.reducer';

const initialBoardState: IInitialBoardState = {
  columsPosition: [],
  columns: [
    { id: 0, title: 'Todo', type: 'todo' },
    { id: 1, title: 'In Progress', type: 'progress' },
    { id: 2, title: 'Done', type: 'done' },
  ],
  tasks: {
    todo: [
      { id: 0, title: 'Make Header', status: 'todo' },
      { id: 1, title: 'Make Main', status: 'todo' },
      { id: 2, title: 'Make Footer', status: 'todo' },
    ],
    progress: [
      { id: 3, title: 'Make Arcitcle', status: 'progress' },
      { id: 4, title: 'Make Aside', status: 'progress' },
      { id: 5, title: 'Make Paragraph', status: 'progress' },
    ],
    done: [
      { id: 6, title: 'Make Scroll', status: 'done' },
      { id: 7, title: 'Make Loader', status: 'done' },
      { id: 8, title: 'Make Button', status: 'done' },
      { id: 9, title: 'Make background', status: 'done' },
    ],
  },
  boardPosition: null,
  dragStartPosition: null,
  error: null,
};

const BoardSlice = createSlice({
  name: 'board',
  initialState: initialBoardState,
  reducers: boardReducer,
});

const BoardActions = BoardSlice.actions;
const BoardReducer = BoardSlice.reducer;

export { BoardReducer, BoardActions };
