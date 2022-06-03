import React, { FC } from 'react';
import * as m from './Message.style';

interface IMessage {
  content?: string;
  err?: boolean;
}

const Message: FC<IMessage> = ({ content, err }) => {
  return (
    <div css={err ? m.messageWrapErr : m.messageWrap} data-testid={err ? 'errMessage' : 'contentMessage'}>
      <p>{content || 'Data saved successfully'}</p>
    </div>
  );
};

export { Message };
