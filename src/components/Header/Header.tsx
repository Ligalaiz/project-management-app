import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as h from './Header.style';

const Header: FC = () => {
  const { search } = useLocation();

  return (
    <header data-testid="header" css={h.header}>
      <nav>
        <ul className="reset-list" css={h.nav}>
          <li>
            <NavLink
              css={h.navLink}
              to={{
                pathname: '/board',
                search: `${search}`,
              }}
            >
              Board
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
