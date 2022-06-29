import { css } from '@emotion/react';
import { color } from '@src/styles';
import clock from '@assets/img/clock.svg';
import dote from '@assets/img/dote.svg';
import open from '@assets/img/open.svg';

export const table = css`
  border-radius: 6px;
  border: 1px solid ${color['gray-color-light-X1']};
`;

export const title = css`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${color['gray-color-light-X1']};

  background-color: ${color['gray-color-light']};
`;

export const state = css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export const sort = css`
  position: relative;

  padding-right: 15px;
  border: none;

  color: ${color['gray-color-light-X5']};
  background-color: transparent;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 60%;

    width: 0;
    height: 0;
    vertical-align: -2px;
    border: 4px solid ${color['gray-color-light-X5']};
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: transparent;

    transform: translateY(-50%);
  }
`;

export const sortActive = css`
  ${sort}

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

export const sortWrap = css`
  position: relative;
`;

export const project = css`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  border-bottom: 1px solid ${color['gray-color-light-X8']};
`;

export const projectTitle = css`
  position: relative;

  margin: 0.4rem;
`;
export const projectTitleClose = css`
  ${projectTitle}

  padding-bottom: 30px;
  &:after {
    content: 'Closed';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 66px;
    height: 26px;
    padding: 8px;
    border: 1px solid ${color['red-color']};
    border-radius: 2rem;

    font-weight: 500;
    color: ${color['red-color']};
    line-height: 6px;
  }
`;

export const projectText = css`
  color: ${color['gray-color-light-X5']};
  font-size: 16px;
  font-weight: 600;

  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    color: ${color['blue-color-light']};
    text-decoration: underline;
  }
`;

export const projectParam = css`
  display: flex;
  flex-direction: column;
  min-width: 290px;

  @media (max-width: 390px) {
    max-width: 240px;
    min-width: auto;
  }
`;

export const projectDesc = css`
  flex: 1 0 auto;
  max-width: 500px;

  @media (max-width: 492px) {
    flex: unset;
  }
`;

export const projectWrap = css`
  display: flex;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }

  @media (max-width: 492px) {
    max-width: 290px;
  }

  @media (max-width: 390px) {
    max-width: 250px;
  }
`;

const commonCount = css`
  position: relative;

  padding-left: 22px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;

    width: 16px;
    height: 16px;

    color: ${color['gray-color-light-X2']};

    background-repeat: no-repeat;
    transform: translateY(-50%);
  }

  &:hover {
    color: ${color['gray-color-light-X5']};
  }
`;

export const projectUpdated = css`
  ${commonCount}

  color: ${color['gray-color-light-X2']};
  font-size: 14px;

  cursor: default;

  &:before {
    background-image: url(${clock});
  }

  &:hover {
    color: ${color['gray-color-light-X2']};
  }
`;

export const menuBtn = css`
  position: relative;

  width: 25px;
  height: 25px;
  border: none;

  background-image: url(${dote});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const menuBtnActive = css`
  ${menuBtn}

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

export const tableWrap = css`
  flex: 1 0 auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const message = css`
  position: relative;

  padding-top: 32px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;

    width: 24px;
    height: 24px;

    background-image: url(${open});
    background-repeat: no-repeat;
    background-size: 23px;
    transform: translateX(-50%);
  }
`;

export const messageTitle = css`
  margin-bottom: 2rem;

  font-size: 24px;
  font-weight: 600;
`;

export const messageWrap = css`
  padding: 3.2rem;

  text-align: center;
`;
