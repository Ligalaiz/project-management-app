import React, { FC, useId, lazy, Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from '@src/screens/Layout';
import { RequireAuth } from '@src/hoc/RequireAuth';

const Welcome = lazy(() => import('@src/components/Welcome'));
const Main = lazy(() => import('@src/components/Main'));
const Board = lazy(() => import('@src/components/Board'));
const Signin = lazy(() => import('@src/components/Signup'));
const Login = lazy(() => import('@src/components/Login'));
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
                <RequireAuth>
                  <Main />
                </RequireAuth>
              </Suspense>
            }
          />
          <Route
            path="welcome"
            element={
              <Suspense fallback={<h2 style={{ flex: '1 0 auto' }}>Loading...</h2>}>
                <Welcome />
              </Suspense>
            }
          />
          <Route
            path="board/:id"
            element={
              <Suspense fallback={<h2 style={{ flex: '1 0 auto' }}>Loading...</h2>}>
                <RequireAuth>
                  <Board />
                </RequireAuth>
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<h2 style={{ flex: '1 0 auto' }}>Loading...</h2>}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <Suspense fallback={<h2 style={{ flex: '1 0 auto' }}>Loading...</h2>}>
                <Signin />
              </Suspense>
            }
          />
          <Route
            path="edit"
            element={
              <Suspense fallback={<h2 style={{ flex: '1 0 auto' }}>Loading...</h2>}>
                <RequireAuth>
                  <Signin />
                </RequireAuth>
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
