import { css } from '@emotion/react';
import { color } from '@src/styles';

export const footerWrap = css`
  flex: 0 0 auto;

  background-color: ${color['gray-color-light']};
`;

export const footer = css`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
`;

export const footerLink = css`
  color: ${color['white-color']};
`;
