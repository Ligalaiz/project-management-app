import { css } from '@emotion/react';
import { color } from '@src/styles';

export const welcomWrap = css`
  flex: 1 0 auto;
  padding: 2 rem 0;

  color: ${color['black-color']};

  background-image: linear-gradient(rgb(234, 230, 255), rgb(255, 255, 255));
`;

export const descWrap = css`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const desc = css`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-top: 8rem;
  max-width: 600px;
  text-align: left;

  @media (max-width: 990px) {
    max-width: 390px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding-top: 5rem;

    text-align: center;
  }
`;

export const title = css`
  margin-bottom: 2rem;

  font-size: 4.8rem;
  font-weight: 500;
  line-height: 1.25;
  text-align: left;

  @media (max-width: 990px) {
    font-size: 4rem;
    line-height: 1.1;
  }

  @media (max-width: 768px) {
    font-size: 3.2rem;
    text-align: center;
  }
`;

export const subtitle = css`
  font-size: 2rem;
  text-align: left;
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const preview = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px 16px 16px;

  text-align: center;
  line-height: 1.5;
`;

export const imgWrap = css`
  padding-top: 2rem;
  max-width: 350px;

  @media (max-width: 990px) {
    padding-top: 9rem;
    max-width: 200px;
  }

  @media (max-width: 768px) {
    max-width: 320px;
    padding-top: 3rem;
  }
`;

export const previewTitle = css`
  margin-bottom: 1rem;

  font-size: 3.6rem;
  font-weight: 500;
  line-height: 1.3;

  @media (max-width: 768px) {
    margin-bottom: 2rem;

    font-size: 2.4rem;
  }
`;

export const previewSubtitle = css`
  margin-bottom: 2rem;

  font-size: 2rem;
`;
