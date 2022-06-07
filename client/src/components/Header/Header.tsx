import React, { FC, useState, useEffect, MouseEvent, ChangeEvent } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useTransform, motion, useViewportScroll } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useMatchMedia from 'use-match-media-hook';
import { useAction } from '@src/hooks/useAction';
import { MenuBtn } from '@components/MenuBtn';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import { Input } from '@components/Input';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { logout } from '@utils/auth.utils';
import { set, get, queries } from '@src/utils';
import * as h from './Header.style';

const Header: FC = () => {
  const [tablet] = useMatchMedia(queries);
  const { user } = useTypedUseSelector((state) => state.form);
  const { logoutUser, setLang } = useAction();
  const { t, i18n } = useTranslation();
  const [isModal, setIsModal] = useState(false);
  const [isDelUser, setIsDelUser] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { search } = useLocation();
  const navigate = useNavigate();
  const { scrollY } = useViewportScroll();
  const offsetY = [0, 150];
  const paddingTop = useTransform(scrollY, offsetY, [20, 0]);
  const paddingBottom = useTransform(scrollY, offsetY, [20, 0]);

  const handleCloseModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const {
      dataset: { type, name },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
        name: string;
      };
    };

    if (name === 'delUser') setIsDelUser(true);
    if (name === 'cboard') setIsDelUser(false);
    if (type === 'close') setIsModal(!isModal);
    if (tablet) {
      setIsMenu(false);
      setToggle(false);
    }
  };

  const handleLogout = () => {
    logout();
    logoutUser();
    navigate('/welcome');
    if (tablet) {
      setIsMenu(false);
      setToggle(false);
    }
  };

  const handleEditProfile = () => {
    navigate('/edit');
    if (tablet) {
      setIsMenu(false);
      setToggle(false);
    }
  };

  const handleAuth = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const {
      dataset: { name },
    } = e.target as typeof e.target & {
      dataset: {
        name: string;
      };
    };

    if (name === 'login') {
      navigate('/login');
    }

    if (name === 'signup') {
      navigate('/signup');
    }

    if (tablet) {
      setIsMenu(false);
      setToggle(false);
    }
  };

  const handleChangeLang = (e: ChangeEvent<HTMLInputElement>) => {
    const event = e as unknown as ChangeEvent<HTMLInputElement>;
    const isChecked = event.target.checked;

    if (isChecked) {
      i18n.changeLanguage('ru');
      set('lang', 'ru');
      setLang('ru');
    }

    if (!isChecked) {
      i18n.changeLanguage('en');
      set('lang', 'en');
      setLang('en');
    }
  };

  const handleMenu = () => {
    setIsMenu(!isMenu);
    setToggle(!toggle);
  };

  useEffect(() => {
    const lang = get('lang');
    if (lang) {
      set('lang', lang);
      setLang(lang);
    }
  }, []);

  const loginView = (
    <>
      <Button title={t('user.edit_profile')} handleClick={handleEditProfile} />
      <Button title={t('user.del')} dataType="close" dataName="delUser" handleClick={handleCloseModal} />
      <Button title={t('user.logout')} handleClick={handleLogout} />
      <Button
        title={t('create_project')}
        type="create"
        dataType="close"
        dataName="cboard"
        handleClick={handleCloseModal}
      />
    </>
  );

  const logoutView = (
    <>
      <Button title={t('user.login')} dataName="login" handleClick={handleAuth} />
      <Button title={t('user.reg')} dataName="signup" handleClick={handleAuth} />
    </>
  );

  const langSwither = <Input name="switcher" type="checkbox" testId="lang" handleChange={handleChangeLang} />;

  return (
    <>
      <motion.header data-testid="header" css={h.header} style={{ paddingTop, paddingBottom }}>
        <div className="container" css={h.headerWrap}>
          <nav>
            <ul className="reset-list" css={h.nav}>
              <li>
                <NavLink
                  css={h.navLink}
                  title="HOME"
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
            {user && !tablet && loginView}
            {!user && !tablet && logoutView}
            {!tablet && langSwither}
            {tablet && <MenuBtn toggle={toggle} handleClick={handleMenu} />}
            {user && tablet && isMenu && (
              <div css={h.openMenu}>
                {loginView}
                {langSwither}
              </div>
            )}
            {!user && tablet && isMenu && (
              <div css={h.openMenu}>
                {logoutView}
                {langSwither}
              </div>
            )}
          </div>
        </div>
      </motion.header>
      {isModal && <Modal type={isDelUser ? 'duser' : 'сboard'} handleClose={handleCloseModal} />}
    </>
  );
};

export { Header };
