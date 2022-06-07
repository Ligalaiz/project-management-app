import React, { FC } from 'react';
import bg from '@assets/img/bg.jpg';
import circle from '@assets/img/circle.png';
import house from '@assets/img/house.png';
import message from '@assets/img/message.png';
import octopus from '@assets/img/octopus.png';
import shadow from '@assets/img/shadow.png';
import smHouse from '@assets/img/smHouse.png';
import spaceship from '@assets/img/spaceship.png';

import {
  bgImage,
  errorBg,
  errorCircle,
  errorContent,
  errorHouse,
  errorMessage,
  errorOctopus,
  errorShadow,
  errorSmHouse,
  errorSpaceship,
  errorWrap,
} from './NotFoundPage.style';

const NotFoundPage: FC = () => {
  return (
    <div data-testid="notFoundPage" css={errorWrap}>
      <div css={errorBg}>
        <img src={bg} alt="background" css={bgImage} />
      </div>
      <div css={errorContent}>
        <img css={errorMessage} alt="404 “This is not the web page you are looking for”" src={message} />
        <img alt="octopus" src={octopus} css={errorOctopus} />
        <img alt="spaceship" src={spaceship} css={errorSpaceship} />
        <img alt="circle" src={circle} css={errorCircle} />
        <img alt="shadow" src={shadow} css={errorShadow} />
        <img alt="house" src={house} css={errorHouse} />
        <img alt="smHouse" src={smHouse} css={errorSmHouse} />
      </div>
    </div>
  );
};

export default NotFoundPage;
