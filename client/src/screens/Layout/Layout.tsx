import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { errorBoundary } from '@src/hoc/errorBoundary';

const Layout: FC = () => {
  const HeaderWithWithErrorBoundary = errorBoundary(Header);
  const FooterWithWithErrorBoundary = errorBoundary(Footer);

  return (
    <div className="wrapper">
      <HeaderWithWithErrorBoundary />
      <Outlet />
      <FooterWithWithErrorBoundary />
    </div>
  );
};

export { Layout };
