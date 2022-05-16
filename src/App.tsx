import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from '@src/router';
import { store } from '@src/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export { App };
