import { css } from '@emotion/react';

export const board = css`
  display: flex;
  max-height: 320px;
  padding: 0;
  gap: 5px;

  overflow-x: scroll;
  overflow-y: hidden;
`;

export const boardWrap = css`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const btnWrap = css`
  display: flex;
  gap: 2rem;
`;

export const boardMain = css`
  flex: 1 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
