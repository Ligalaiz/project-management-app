import React, { FC, useId, lazy, Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from '@src/screens/Layout';

const Main = lazy(() => import('@src/components/Main'));
const Board = lazy(() => import('@src/components/Board'));
const NotFoundPage = lazy(() => import('@src/components/NotFoundPage'));

const AppRouter: FC = () => {
  const match = useParams();
  const id = useId();

  return (
    <TransitionGroup>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<h2 style={{ flex: '1 0 auto' }}>Loading...</h2>}>
                <Main />
              </Suspense>
            }
          />
          <Route
            path="board/:id"
            element={
              <Suspense fallback={<h2 style={{ flex: '1 0 auto' }}>Loading...</h2>}>
                <Board />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <CSSTransition in={match != null} timeout={1000} key={id} classNames="page">
                <Suspense fallback={<h2 style={{ flex: '1 0 auto' }}>Loading...</h2>}>
                  <NotFoundPage />
                </Suspense>
              </CSSTransition>
            }
          />
        </Route>
      </Routes>
    </TransitionGroup>
  );
};

export { AppRouter };
