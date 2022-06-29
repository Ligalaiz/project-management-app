import { css } from '@emotion/react';
import { color } from '@src/styles';

export const menu = css`
  display: flex;
  width: 50px;
  border: none;
  height: 50px;
  padding: 0;

  background-color: transparent;

  cursor: pointer;
`;

export const menuActive = css`
  ${menu}

  &:before {
    content: ' ';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: block;

    cursor: default;
    background: transparent;
    z-index: 80;
  }
`;

export const line = css`
  fill: none;
  stroke: ${color['white-color']};
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const line1 = css`
  ${line}

  stroke-dasharray: 60 207;
  stroke-width: 6;
`;

export const line2 = css`
  ${line}

  stroke-dasharray: 60 60;
  stroke-width: 6;
`;

export const line3 = css`
  ${line}

  stroke-dasharray: 60 207;
  stroke-width: 6;
`;

export const line11 = css`
  ${line1}

  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
`;

export const line22 = css`
  ${line2}

  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
  stroke-width: 6;
`;

export const line33 = css`
  ${line3}

  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
  stroke-width: 6;
`;
