import { css } from '@emotion/react';
import { color } from '@src/styles';
import taskIcon from '@assets/img/task-icon.svg';
import dote from '@assets/img/dote.svg';

export const task = css`
  position: relative;

  min-width: 321px;
  margin-bottom: 8px;
  padding: 8px 8px 8px 32px;
  border-radius: 6px;
  border: 1px solid ${color['gray-color-light-X1']};

  background-color: ${color['gray-color-light']};
  cursor: move;
  z-index: 10000;
`;

export const taskMenu = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const taskTitle = css`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: -23px;

    width: 16px;
    height: 16px;

    background-image: url(${taskIcon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const taskMenuBtn = css`
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

export const executorWrap = css`
  font-size: 14px;
  color: ${color['gray-color-light-X2']};
`;

export const executor = css`
  color: ${color['gray-color-light-X5']};

  transition: all 0.2s linear;
  &:hover {
    text-decoration: underline;
  }
`;
