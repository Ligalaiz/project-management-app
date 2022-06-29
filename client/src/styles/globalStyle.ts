import { css } from '@emotion/react';
import helveticaRegular from '@assets/fonts/helvetica-regular.woff2';
import helveticaMedium from '@assets/fonts/helvetica-medium.woff2';
import helveticaBold from '@assets/fonts/helvetica-bold.woff2';
import yes from '@assets/img/yes.svg';
import { color } from './variables';

export const globalStyle = css`
  @font-face {
    font-family: 'Helvetica';
    font-style: normal;
    font-weight: 400;
    src: url(${helveticaRegular});
  }
  @font-face {
    font-family: 'Helvetica Medium';
    font-style: normal;
    font-weight: 600;
    src: url(${helveticaMedium});
  }
  @font-face {
    font-family: 'Helvetica Bold';
    font-style: normal;
    font-weight: 800;
    src: url(${helveticaBold});
  }

  html {
    box-sizing: border-box;
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100%;
  }

  * {
    box-sizing: inherit;
    outline: none;
  }

  ::before {
    box-sizing: inherit;
    outline: none;
  }

  ::after {
    box-sizing: inherit;
    outline: none;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  :root {
    font-size: 10px;
  }

  .container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 15px;

    @media (max-width: 990px) {
      max-width: 720px;
    }

    @media (max-width: 768px) {
      max-width: 540px;
    }
  }

  input:focus {
    outline: none;
  }

  body {
    position: relative;

    margin: 0;
    padding: 0;
    height: 100%;

    font-family: 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${color['white-color']};

    background-color: ${color['gray-color']};

    user-select: none;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .visually-hidden {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;

    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  .visually-hidden:not(:focus):not(:active) {
    position: absolute;

    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  .reset-list {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    min-width: 320px;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;

    background: ${color['gray-color-light']};
    background-clip: padding-box;
  }

  #root {
    height: 100%;
    & > div {
      height: 100%;
    }
  }

  .logo {
    fill: ${color['white-color']};
  }

  .sortActive {
    &:before {
      content: '';
      position: absolute;
      left: 4px;
      top: 50%;

      width: 16px;
      height: 16px;

      background-image: url(${yes});
      background-repeat: no-repeat;
      transform: translateY(-50%);
    }
  }

  .projectFilterActive {
    color: ${color['gray-color-light-X5']} !important;
  }
`;
