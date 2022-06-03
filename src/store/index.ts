import { configureStore } from '@reduxjs/toolkit';

import { BoardReducer } from './board';
import { FormReducer } from './form';

const store = configureStore({
  reducer: { board: BoardReducer, form: FormReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store, RootState, AppDispatch };
