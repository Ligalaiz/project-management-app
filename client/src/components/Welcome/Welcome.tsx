import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@components/Button';
import mpa from '@assets/img/welcome/mpa.png';
import * as w from './Welcome.style';

const Welcome = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div css={w.welcomWrap}>
      <div className="container">
        <div css={w.descWrap}>
          <div css={w.desc}>
            <h1 css={w.title}>{t('welcome.title')}</h1>
            <p css={w.subtitle}>{t('welcome.subtitle')}</p>
          </div>
          <div css={w.imgWrap}>
            <img src={mpa} loading="lazy" alt="mpa" />
          </div>
        </div>
        <div css={w.preview}>
          <h2 css={w.previewTitle}>{t('welcome.preview_title')}</h2>
          <p css={w.previewSubtitle}>{t('welcome.preview_subtitle')}</p>
          <Button
            title={t('welcome.start')}
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
