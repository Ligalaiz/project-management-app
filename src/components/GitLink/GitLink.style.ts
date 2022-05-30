import { css } from '@emotion/react';

export const githubCorner = css`
  position: absolute;
  top: 0;
  right: 0;

  width: 100px;
  height: 100px;

  z-index: 1001;

  &:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }
`;
