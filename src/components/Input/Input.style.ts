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
    content: 'ru';
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
  &:checked ~ .slider::before {
    content: 'en';

    background-color: ${color['red-color']};
  }

  &:focus ~ .slider {
    box-shadow: 0 0 1px ${color['red-color']};
  }

  &:checked ~ .slider::before {
    transform: translateX(24px);
  }
`;

export const errorMessage = css`
  width: 94px;

  color: red;
`;
