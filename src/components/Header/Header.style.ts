import { css } from '@emotion/react';

import { color } from '@src/styles';

export const header = css`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  margin-bottom: 2rem;

  gap: 0.2rem;
`;

export const nav = css`
  display: flex;
`;

export const navLink = css`
  display: block;
  padding: 7px 14px;
  border-radius: 3px;

  color: ${color['white-color']};
  font-weight: 600;

  transition: all 0.2s linear;

  &:hover {
    background-color: ${color['gray-color-light']};
  }
  &.active {
    background-color: ${color['gray-color-light']};
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
