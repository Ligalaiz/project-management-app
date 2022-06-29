import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from '@src/router';
import { Loader } from '@components/Loader';
import { store } from '@src/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <AppRouter />
      </Suspense>
    </Provider>
  );
};

export { App };
