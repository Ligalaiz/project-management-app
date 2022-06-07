import { css } from '@emotion/react';

export const formWrap = css`
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  min-width: 310px;
`;

export const optionWrap = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  min-height: 115px;

  @media (max-width: 920px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
