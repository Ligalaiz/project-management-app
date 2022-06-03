import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useTypedUseSelector((state) => state.form);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/welcome" state={{ from: location }} replace />;
  }

  return children;
};

export { RequireAuth };
