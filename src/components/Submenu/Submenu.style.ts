import { css } from '@emotion/react';
import { color } from '@src/styles';

export const wrap = css`
  position: absolute;

  display: flex;
  flex-direction: column;
  max-width: 200px;
  border-radius: 6px;
  padding: 5px 0 0;
  border: 1px solid ${color['gray-color-light-X1']};

  background-color: ${color['gray-color-light']};
  z-index: 10;
`;

export const wrapBoard = css`
  ${wrap}

  &:before {
    content: '';
    position: absolute;
    top: -6px;
    right: 11px;

    width: 11px;
    height: 11px;
    border-radius: 2px;
    border-left: 1px solid ${color['gray-color-light-X1']};
    border-top: 1px solid ${color['gray-color-light-X1']};

    background: ${color['gray-color-light']};
    transform: rotate(45deg);
    z-index: 1;
  }
`;

export const wrapColumn = css`
  ${wrapBoard}

  top: 30px;
  right: 3px;
`;

export const wrapTask = css`
  ${wrapBoard}

  top: 23px;
  right: -5px;
`;

export const wrapProject = css`
  ${wrapBoard}

  top: 40px;
  right: 9px;
`;

export const wrapTable = css`
  ${wrap}

  left: -172px;
  top: 25px;

  min-width: 230px;
  border-bottom: 1px solid ${color['gray-color-light-X8']};
`;

export const titleSbmenu = css`
  padding: 0 10px;
`;
