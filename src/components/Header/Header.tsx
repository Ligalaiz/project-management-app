import React, { FC, useState, MouseEvent } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTransform, motion, useViewportScroll } from 'framer-motion';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { Input } from '@components/Input';
import * as h from './Header.style';

const Header: FC = () => {
  const [isModal, setIsModal] = useState(false);
  const { search } = useLocation();
  const { scrollY } = useViewportScroll();
  const offsetY = [0, 150];
  const paddingTop = useTransform(scrollY, offsetY, [20, 0]);
  const paddingBottom = useTransform(scrollY, offsetY, [20, 0]);

  const handleCloseModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const {
      dataset: { type },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
      };
    };

    if (type === 'close') {
      setIsModal(!isModal);
    }
  };

  return (
    <>
      <motion.header data-testid="header" css={h.header} style={{ paddingTop, paddingBottom }}>
        <div className="container" css={h.headerWrap}>
          <nav>
            <ul className="reset-list" css={h.nav}>
              <li>
                <NavLink
                  css={h.navLink}
                  to={{
                    pathname: '/',
                    search: `${search}`,
                  }}
                >
                  <svg
                    height="32"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="32"
                    data-view-component="true"
                    className="octicon octicon-mark-github v-align-middle"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      className="logo"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div css={h.btnWrap}>
            <Button title="edit profile" />
            <Button title="delete user" />
            <Button title="logout" />
            <Button title="New project" type="create" dataType="close" handleClick={handleCloseModal} />
            <Input name="switcher" type="checkbox" testId="lang" />
          </div>
        </div>
      </motion.header>
      {isModal && <Modal type="сboard" handleClose={handleCloseModal} />}
    </>
  );
};

export { Header };
