import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import * as m from './Message.style';

interface IMessage {
  content?: string;
  err?: boolean;
}

const Message: FC<IMessage> = ({ content, err }) => {
  const { t } = useTranslation();

  return (
    <div css={err ? m.messageWrapErr : m.messageWrap} data-testid={err ? 'errMessage' : 'contentMessage'}>
      <p>{content || t('message.save_data')}</p>
    </div>
  );
};

export { Message };
