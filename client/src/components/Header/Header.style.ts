import { css } from '@emotion/react';
import { color } from '@src/styles';

export const header = css`
  position: sticky;
  top: 0;

  background-color: ${color['gray-color-light']};
  z-index: 1000;
`;

export const headerWrap = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const logo = css`
  background: red;
`;

export const nav = css`
  display: flex;
  align-items: center;
`;

export const navLink = css`
  display: block;
  padding: 7px 14px;
  border-radius: 3px;

  color: ${color['white-color']};
  font-weight: 600;

  transition: all 0.2s linear;

  &:hover {
    color: ${color['gray-color-light-X10']};
  }

  &:hover .octicon .logo {
    fill: ${color['gray-color-light-X10']};
    transition: all 0.2s linear;
  }

  &.active {
    color: ${color['gray-color-light-X10']};
  }
`;

export const btn = css`
  border: none;
  border-radius: 3px;
  padding: 7px 14px;

  color: ${color['white-color']};

  transition: all 0.2s linear;

  background-color: ${color['blue-color-light']};

  &:hover {
    background-color: ${color['blue-color-light-X1']};
  }
`;

export const path = css`
  padding-left: 14px;
  min-height: 24px;

  visibility: hidden;
`;

export const showPath = css`
  ${path}

  visibility: visible
`;

export const btnWrap = css`
  position: relative;

  display: flex;
  align-items: center;
  max-height: 31px;
  gap: 0.5rem;
`;

export const mobileMenu = css`
  position: absolute;
  top: 40px;
  right: 5px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 6px;
  padding: 10px;

  background-color: ${color['black-color']};
`;

export const openMenu = css`
  ${mobileMenu}

  animation: show 1s ease-in-out;

  z-index: 100;

  @keyframes show {
    0% {
      transform: translateX(150%);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
