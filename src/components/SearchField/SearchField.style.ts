import { css } from '@emotion/react';
import { color } from '@src/styles';
import search from '@assets/img/search.svg';

export const searchContainer = css`
  position: relative;

  display: inline-block;
  margin-bottom: 1.6rem;
  width: 320px;

  overflow: visible;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 8px;

    width: 15px;
    height: 15px;

    background-image: url(${search});
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
`;

export const searchField = css`
  width: 100%;
  padding: 5px 12px 5px 32px;
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
