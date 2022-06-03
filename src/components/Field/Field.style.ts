import { css } from '@emotion/react';
import { color } from '@src/styles';

export const dataNotice = css`
  transition: all 0.2s linear;
`;

export const dataField = css`
  height: 47px;
  width: 100%;
  padding: 10px;
  border: 1px solid ${color['brand-color']};

  font-size: 18px;
  color: ${color['brand-color']};

  outline: none;
  background-color: transparent;

  transition: all 0.2s linear;
`;
