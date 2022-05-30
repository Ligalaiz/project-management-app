import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { errorBoundary } from '@src/hoc/errorBoundary';
import { GitLink } from '@components/GitLink';

const Layout: FC = () => {
  const HeaderWithWithErrorBoundary = errorBoundary(Header);
  const FooterWithWithErrorBoundary = errorBoundary(Footer);

  return (
    <div className="wrapper">
      <GitLink />
      <HeaderWithWithErrorBoundary />
      <Outlet />
      <FooterWithWithErrorBoundary />
    </div>
  );
};

export { Layout };
