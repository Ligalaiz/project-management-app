import React from 'react';
import * as f from './Footer.style';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div css={f.footerWrap}>
      <div className="container" css={f.footer}>
        <div>
          <a css={f.footerLink} href="https://github.com/Ligalaiz/project-management-app">
            Link
          </a>
        </div>
        <div>{date}</div>
      </div>
    </div>
  );
};

export { Footer };
