import { css } from '@emotion/react';
import { color } from '@src/styles';

export const wrap = css`
  min-height: 31px;
`;

export const switcherWrap = css`
  ${wrap}

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const switcherLabel = css`
  position: relative;

  display: block;
  width: 60px;
  height: 31px;
  border-radius: 34px;

  & input {
    width: 0;
    height: 0;

    opacity: 0;
  }
`;

export const switcherMessage = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border: 2px solid ${color['brand-color']};

  transition: 0.4s linear;
  cursor: pointer;

  &:before {
    position: absolute;
    content: 'en';
    bottom: 2px;
    left: 4px;

    height: 23px;
    width: 23px;
    border-radius: 50%;

    color: ${color['black-color']};
    text-align: center;
    font-weight: 700;
    line-height: 19px;

    background-color: ${color['white-color']};
    transition: 0.4s;
  }

  &.round {
    border-radius: 34px;
  }

  &.round::before {
    border-radius: 50%;
  }
`;

export const switcher = css`
  &:checked ~ .slider:before {
    content: 'ru';

    background-color: ${color['green-color-X1']};
    color: ${color['white-color']};
  }

  &:focus ~ .slider {
    box-shadow: 0 0 1px ${color['red-color']};
  }

  &:checked ~ .slider:before {
    transform: translateX(24px);
  }
`;

export const errorMessage = css`
  display: block;
  width: 180px;
  min-height: 20px;

  color: ${color['red-color']};
  line-height: 20px;
`;

export const input = css`
  width: 100%;
  padding: 5px 12px;
  border-radius: 6px;
  border: 1px solid ${color['gray-color-light-X6']};

  color: ${color['gray-color-light-X5']};
  line-height: 20px;

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
