import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { errorBoundary } from '@src/hoc/errorBoundary';
import { GitLink } from '@components/GitLink';

const Layout: FC = () => {
  const HeaderWithWithErrorBoundary = errorBoundary(Header);

  return (
    <div className="wrapper">
      <GitLink />
      <HeaderWithWithErrorBoundary />
      <Outlet />
    </div>
  );
};

export { Layout };
