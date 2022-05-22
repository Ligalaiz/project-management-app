import { css } from '@emotion/react';
import { color } from '@src/styles';

export const modalWrap = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color['black-color-X1']};
  z-index: 1000;
`;

export const modal = css`
  max-width: 600px;
  min-width: 446px;
  border: 1px solid ${color['ray-color-light-X1']};
  border-radius: 6px;
`;

export const title = css`
  position: relative;

  display: flex;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${color['gray-color-light-X1']};

  font-size: 15px;
  font-weight: 600;

  background-color: ${color['gray-color-light']};
`;

export const contentWrap = css`
  padding: 16px;

  background-color: ${color['gray-color']};
`;

export const content = css`
  margin-bottom: 1.5rem;
`;

export const columnName = css`
  margin-bottom: 0.6rem;

  font-size: 15px;
  font-weight: 600;
`;

export const btnWrap = css`
  display: flex;
  justify-content: space-between;
`;

const field = css`
  width: 100%;
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid ${color['gray-color-light-X6']};

  color: ${color['gray-color-light-X5']};
  background-color: ${color['black-color']};
  transition: all 0.2s linear;
  outline: none;
  &::placeholder {
    color: ${color['gray-color-light-X6']};
  }
  &:focus {
    border-color: ${color['blue-color-light']};

    background-color: ${color['gray-color']};
  }
`;

export const taskField = css`
  ${field}
  max-height: 400px;

  resize: vertical;
`;

export const columnTitle = css`
  ${field}
`;

export const taskTitle = css`
  ${field}
  margin-bottom: 1rem;
`;
