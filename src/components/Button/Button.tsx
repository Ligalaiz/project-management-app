import React, { FC } from 'react';
import { IButton } from '@src/store/board/Board.types';
import * as b from './Button.style';

const Button: FC<IButton> = ({ type, title, handleClick, dataType }) => {
  let btnStyle = b.btn;

  if (type === 'create') btnStyle = b.addAction;
  if (type === 'delete') btnStyle = b.deleteAction;
  if (type === 'close') btnStyle = b.closeAction;
  if (type === 'submenu') btnStyle = b.submenuAction;

  return (
    <button css={btnStyle} onClick={handleClick} data-type={dataType}>
      {title}
    </button>
  );
};

export { Button };
