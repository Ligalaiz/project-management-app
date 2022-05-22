import { configureStore } from '@reduxjs/toolkit';

import { BoardReducer } from './board';

const store = configureStore({
  reducer: { board: BoardReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, RootState, AppDispatch };
