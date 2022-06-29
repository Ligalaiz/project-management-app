import { createSlice } from '@reduxjs/toolkit';
import { get } from '@src/utils';
import { IInitialBoardState } from './Board.types';
import { boardReducer } from './Board.reducer';

const initialBoardState: IInitialBoardState = {
  // boards: [
  //   {
  //     id: 0,
  //     creator: 'user',
  //     title: 'Create App',
  //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
  //     status: false,
  //     columnsPosition: [],
  //     tasksCount: 18,
  //     columnCount: 5,
  //     columns: [
  //       {
  //         id: 0,
  //         title: 'Todo',
  //         type: 'todo',
  //         content: '',
  //         items: [
  //           {
  //             id: 0,
  //             title: 'Make Header',
  //             status: 'todo',
  //             content: '',
  //             creator: { name: 'Vasy', mail: 'v@mail.com', password: '1234', id: '1' },
  //             executor: { name: 'Pety', mail: 'p@mail.com', password: '1234', id: '2' },
  //           },
  //         ],
  //       },
  //       {
  //         id: 1,
  //         title: 'In Progress',
  //         type: 'progress',
  //         content: '',
  //         items: [
  //           {
  //             id: 1,
  //             title: 'Make Main',
  //             status: 'todo',
  //             content: '',
  //             creator: { name: 'Vasy', mail: 'a@mail.com', password: '1234', id: '1' },
  //             executor: null,
  //           },
  //         ],
  //       },
  //     ],
  //     boardPosition: null,
  //     targetColumn: null,
  //     createDate: 1653823120532,
  //     updated: 1653823120532,
  //   },
  // ],
  boards: get('boards') || [],
  boardId: get('boardId') || null,
  filter: get('filter') || false,
  sortType: get('sortType') || 'newestSort',
  searchQuery: get('searchQuery') || '',
  error: null,
  lang: get('lang') && get('lang') === 'ru' ? 'ru' : 'en',
  isLoading: false,
};

const BoardSlice = createSlice({
  name: 'board',
  initialState: initialBoardState,
  reducers: boardReducer,
});

const BoardActions = BoardSlice.actions;
const BoardReducer = BoardSlice.reducer;

export { BoardReducer, BoardActions };
