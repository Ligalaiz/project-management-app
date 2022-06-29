import React from 'react';
import { useTranslation } from 'react-i18next';
import * as f from './Footer.style';

const Footer = () => {
  const { t } = useTranslation();
  const date = new Date().getFullYear();

  return (
    <div css={f.footerWrap}>
      <div className="container" css={f.footer}>
        <div>
          <a css={f.footerLink} href="https://github.com/Ligalaiz/project-management-app">
            {t('link')}
          </a>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export { Footer };
