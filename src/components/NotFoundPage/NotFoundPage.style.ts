import { css } from '@emotion/react';
import { color } from '@src/styles';

export const errorWrap = css`
  position: relative;
  height: 100vh;

  background-color: ${color['blue-color']};

  z-index: 0;
`;

export const errorBg = css`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 370px;

  overflow: hidden;
`;

export const errorContent = css`
  position: relative;

  display: block;
  margin: 0 auto;
  width: 940px;
  height: 370px;

  overflow: hidden;
`;

export const errorMessage = css`
  position: absolute;
  left: 72px;
  top: 72px;

  width: 271px;
  height: 249px;

  z-index: 10;
  transform: translate3d(-4.9238px, -2.01957px, 0px);
`;

export const errorOctopus = css`
  position: absolute;
  top: 94px;
  left: 356px;

  height: 230px;
  width: 188px;

  z-index: 9;
  transform: translate3d(-2.4619px, -2.01957px, 0px);
`;

export const errorSpaceship = css`
  position: absolute;
  top: 150px;
  left: 432px;

  height: 156px;
  width: 440px;

  z-index: 8;

  transform: translate3d(-2.4619px, -2.01957px, 0px);
`;

export const errorCircle = css`
  position: absolute;
  top: 297px;
  left: 371px;

  height: 49px;
  width: 166px;

  z-index: 7;

  transform: translate3d(-2.4619px, -2.01957px, 0px);
`;

export const errorShadow = css`
  position: absolute;
  top: 263px;
  left: 442px;

  height: 75px;
  width: 430px;

  z-index: 6;

  transform: translate3d(-2.4619px, -2.01957px, 0px);
`;

export const errorHouse = css`
  position: absolute;
  top: 73px;
  left: 467px;

  height: 123px;
  width: 304px;

  z-index: 5;

  transform: translate3d(12.3095px, 4.03915px, 0px);
`;

export const errorSmHouse = css`
  position: absolute;
  left: 762px;
  top: 113px;

  height: 50px;
  width: 116px;

  z-index: 4;

  transform: translate3d(17.9643px, 6.05872px, 0px);
`;

export const bgImage = css`
  position: absolute;

  height: 415px;
  width: 100%;

  z-index: 1;
`;
