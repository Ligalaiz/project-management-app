import { css } from '@emotion/react';
import { color } from '@src/styles';
import open from '@assets/img/open.svg';
import close from '@assets/img/close.svg';

export const btn = css`
  min-width: 131px;
  padding: 5px 16px;
  border-radius: 6px;
  border: 1px solid ${color['white-color-X1']};

  color: ${color['gray-color-light-X5']};
  font-weight: 600;
  line-height: 20px;

  background-color: ${color['gray-color-light-X8']};
  cursor: pointer;
  transition: all 0.2s linear;

  &:hover {
    background-color: ${color['gray-color-light-X1']};
    border-color: ${color['gray-color-light-X2']};
  }

  &:disabled {
    border: 1px solid ${color['white-color-X1']};

    background-color: ${color['gray-color-light-X8']};
    cursor: default;
  }
`;

export const addAction = css`
  ${btn}
  border: 1px solid ${color['white-color-X1']};

  color: white;

  background-color: ${color['green-color']};

  &:hover {
    background-color: ${color['green-color-X1']};
  }
`;

export const start = css`
  ${btn}
  border: 1px solid ${color['white-color-X1']};
  padding: 16px 25px;

  color: white;

  background-color: ${color['blue-color']};

  &:hover {
    background-color: ${color['blue-color-light']};
  }
`;

export const deleteAction = css`
  ${btn}

  color: ${color['red-color']};

  &:hover {
    color: white;

    background-color: ${color['red-color-X1']};
    border-color: ${color['red-color']};
  }
`;

export const closeAction = css`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  padding: 19px;
  border: red;
  border-top-right-radius: 6px;

  background: transparent;
  cursor: pointer;

  &:before {
    content: '+';
    top: 50%;

    display: block;
    width: 9px;
    height: 9px;

    font-size: 25px;
    color: ${color['gray-color-light-X9']};

    transform: translateY(-50%) rotate(45deg);
    transition: all 0.2s linear;
  }

  &:hover:before {
    color: ${color['blue-color-light']};
  }
`;

export const submenuAction = css`
  ${btn}

  position: realtive;

  border-radius: unset;
  border-color: ${color['gray-color-light']};
  margin-bottom: 0.6rem;
  padding: 4px 8px 4px 16px;

  color: ${color['gray-color-light-X5']};
  font-weight: 500;
  text-align: start;

  background-color: ${color['gray-color-light']};
  z-index: 2;

  &:hover {
    color: white;

    background-color: ${color['blue-color']};
    border-color: ${color['blue-color']};
  }
`;

export const submenuSort = css`
  ${submenuAction}

  position: relative;

  padding: 4px 8px 4px 26px;

  line-height: 2.1rem;
`;

const commonCount = css`
  position: relative;

  padding-left: 22px;
  border: none;

  color: ${color['gray-color-light-X2']};
  font-weight: 600;

  background-color: transparent;

  transition: all 0.2s linear;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;

    width: 16px;
    height: 16px;

    background-repeat: no-repeat;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${color['gray-color-light-X5']};
  }
`;

export const openCount = css`
  ${commonCount}

  &:before {
    background-image: url(${open});
  }
`;

export const closeCount = css`
  ${commonCount}

  &:before {
    background-image: url(${close});
  }
`;
