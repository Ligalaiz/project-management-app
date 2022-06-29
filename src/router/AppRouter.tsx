import React, { FC, useId, lazy, Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Layout } from '@src/screens/Layout';
import { RequireAuth } from '@src/hoc/RequireAuth';
import { Loader } from '@components/Loader';
import * as a from './AppRouter.style';

const Welcome = lazy(() => import('@src/components/Welcome'));
const Main = lazy(() => import('@src/modules/Main'));
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
              <Suspense
                fallback={
                  <div css={a.wrap}>
                    <Loader />
                  </div>
                }
              >
                <RequireAuth>
                  <Main />
                </RequireAuth>
              </Suspense>
            }
          />
          <Route
            path="welcome"
            element={
              <Suspense
                fallback={
                  <div css={a.wrap}>
                    <Loader />
                  </div>
                }
              >
                <Welcome />
              </Suspense>
            }
          />
          <Route
            path="board/:id"
            element={
              <Suspense
                fallback={
                  <div css={a.wrap}>
                    <Loader />
                  </div>
                }
              >
                <RequireAuth>
                  <Board />
                </RequireAuth>
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense
                fallback={
                  <div css={a.wrap}>
                    <Loader />
                  </div>
                }
              >
                <Login />
              </Suspense>
            }
          />
          <Route
            path="signup"
            element={
              <Suspense
                fallback={
                  <div css={a.wrap}>
                    <Loader />
                  </div>
                }
              >
                <Signin />
              </Suspense>
            }
          />
          <Route
            path="edit"
            element={
              <Suspense
                fallback={
                  <div css={a.wrap}>
                    <Loader />
                  </div>
                }
              >
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
                <Suspense
                  fallback={
                    <div css={a.wrap}>
                      <Loader />
                    </div>
                  }
                >
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
