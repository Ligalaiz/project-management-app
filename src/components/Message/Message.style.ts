import { css } from '@emotion/react';
import { color } from '@src/styles';

export const messageWrap = css`
  position: absolute;
  top: 200px;
  left: 42%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  padding: 20px;
  border-radius: 15px;

  color: ${color['white-color']};
  text-align: center;

  background-color: ${color['green-color']};
  transition: all 0.2s linear;

  box-shadow: 0px 6px 13px -1px ${color['white-color']};

  animation: jump 3s ease-in-out;

  @keyframes jump {
    0% {
      transform: translateX(-150%);
    }
    5% {
      transform: translateX(5%);
    }
    10% {
      transform: translateX(-5%);
    }
    15% {
      transform: translateX(3%);
    }
    20% {
      transform: translateX(-3%);
    }
    25% {
      transform: translateX(1%);
    }
    35% {
      transform: translateX(-1%);
    }
    50% {
      transform: translateX(0);
    }

    55% {
      transform: translateX(1%);
    }

    60% {
      transform: translateX(-1%);
    }

    65% {
      transform: translateX(3%);
    }

    70% {
      transform: translateX(-3%);
    }

    75% {
      transform: translateX(5%);
    }

    80% {
      transform: translateX(-5%);
    }

    100% {
      transform: translateX(150%);
    }
  }
`;

export const messageWrapErr = css`
  ${messageWrap}
  background-color: ${color['red-color-X1']};
`;
