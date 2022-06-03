import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@components/Button';
import mpa from '@assets/img/welcome/mpa.png';
import * as w from './Welcome.style';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div css={w.welcomWrap}>
      <div className="container">
        <div css={w.descWrap}>
          <div css={w.desc}>
            <h1 css={w.title}>PMA helps teams move work forward.</h1>
            <p css={w.subtitle}>
              Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the
              way your team works is unique—accomplish it all with PMA.
            </p>
          </div>
          <div css={w.imgWrap}>
            <img src={mpa} loading="lazy" alt="mpa" />
          </div>
        </div>
        <div css={w.preview}>
          <h2 css={w.previewTitle}>It’s more than work. It’s a way of working together.</h2>
          <p css={w.previewSubtitle}>
            Start with a PMA board, lists, and cards. Customize and expand with more features as your teamwork grows.
            Manage projects, organize tasks, and build team spirit—all in one place.
          </p>
          <Button
            title="Start doing"
            type="start"
            handleClick={() => {
              navigate('/signup');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export { Welcome };
