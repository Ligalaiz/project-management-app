import { css } from '@emotion/react';
import { color } from '@src/styles';
import dote from '@assets/img/dote.svg';

export const boardWrap = css`
  position: relative;
  max-width: 353px;
  border-radius: 6px;
  padding: 8px;
  border: 1px solid ${color['gray-color-light-X1']};

  background-color: ${color['black-color']};
`;

export const columnList = css`
  position: relative;
  list-style: none;
`;

export const titleWrap = css`
  display: flex;
  justify-content: space-between;

  color: ${color['white-color']};
`;

export const title = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const menu = css`
  display: flex;
  justify-content: space-between;
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

export const addBtn = css`
  position: relative;

  width: 25px;
  height: 25px;
  border: none;

  font-size: 25px;
  color: ${color['gray-color-light-X2']};
  line-height: 25px;

  cursor: pointer;

  background-color: transparent;

  &:before {
    content: 'Add a note to this column';
    position: absolute;
    left: -180px;
    top: 50%;

    width: 175px;
    padding: 5px;
    border-radius: 7px;

    font-size: 14px;
    color: white;

    transform: translateY(-50%);
    visibility: hidden;
    transition: all 0.2s linear;
    background-color: ${color['gray-color-light-X4']};
    z-index: 10;
  }

  &:after {
    content: '';
    position: absolute;
    left: -10px;
    top: 50%;

    width: 5px;
    padding: 5px;

    transform: translateY(-50%) rotate(45deg);
    visibility: hidden;
    transition: all 0.2s linear;
    background-color: ${color['gray-color-light-X4']};
  }
  &:hover {
    color: ${color['blue-color-light']};
    &:before,
    &:after {
      visibility: visible;
    }
  }
`;

export const taskCountWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-right: 1rem;

  background-color: ${color['gray-color-light-X3']};
`;

export const taskCount = css`
  background-color: ${color['gray-color-light-X3']};
`;
