import { createSlice } from '@reduxjs/toolkit';
import { IInitialBoardState } from './Board.types';
import { boardReducer } from './Board.reducer';

const initialBoardState: IInitialBoardState = {
  boards: [
    {
      id: 0,
      creator: 'user',
      title: 'Create App',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
      status: false,
      columnsPosition: [],
      tasksCount: 18,
      columnCount: 5,
      columns: [
        {
          id: 0,
          title: 'Todo',
          type: 'todo',
          content: '',
          items: [
            { id: 0, title: 'Make Header', status: 'todo' },
            { id: 1, title: 'Make Main', status: 'todo' },
            { id: 2, title: 'Make Footer', status: 'todo' },
          ],
        },
        {
          id: 1,
          title: 'In Progress',
          type: 'progress',
          content: '',
          items: [
            { id: 3, title: 'Make Arcitcle', status: 'progress' },
            {
              id: 4,
              title: 'Make Aside',
              status: 'progress',
              content: '',
            },
            { id: 5, title: 'Make Paragraph', status: 'progress' },
          ],
        },
        {
          id: 2,
          title: 'Done',
          type: 'done',
          content: '',
          items: [
            { id: 6, title: 'Make Scroll', status: 'done' },
            { id: 7, title: 'Make Loader', status: 'done' },
            { id: 8, title: 'Make Button', status: 'done' },
            { id: 9, title: 'Make background', status: 'done' },
          ],
        },
        {
          id: 3,
          title: 'Test',
          type: 'test',
          content: '',
          items: [
            { id: 10, title: 'Make Scroll', status: 'test' },
            { id: 11, title: 'Make Loader', status: 'test' },
            { id: 12, title: 'Make Button', status: 'test' },
            { id: 13, title: 'Make background', status: 'test' },
          ],
        },
        {
          id: 4,
          title: 'Check',
          type: 'check',
          content: '',
          items: [
            { id: 14, title: 'Make Scroll', status: 'check' },
            { id: 15, title: 'Make Loader', status: 'check' },
            { id: 16, title: 'Make Button', status: 'check' },
            { id: 17, title: 'Make background', status: 'check' },
          ],
        },
      ],
      boardPosition: null,
      targetColumn: null,
      createDate: 1653823120532,
      updated: 1653823120532,
    },
  ],
  boardId: null,
  filter: false,
  sortType: 'newestSort',
  searchQuery: '',
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
