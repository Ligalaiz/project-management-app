import React, { FC } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { IButton } from '@src/store/board/Board.types';
import * as b from './Button.style';

const Button: FC<IButton> = ({ type, title, handleClick, dataType, dataName, disabled }) => {
  const { filter, sortType } = useTypedUseSelector((state) => state.board);
  let btnStyle = b.btn;
  let classN = '';

  if (type === 'create') btnStyle = b.addAction;
  if (type === 'delete') btnStyle = b.deleteAction;
  if (type === 'close') btnStyle = b.closeAction;
  if (type === 'submenu') btnStyle = b.submenuAction;
  if (type === 'submenuSort') btnStyle = b.submenuSort;
  if (type === 'openCount') btnStyle = b.openCount;
  if (type === 'closeCount') btnStyle = b.closeCount;
  if (type === 'start') btnStyle = b.start;

  if (dataType === 'filterProject') {
    if (type === 'openCount' && !filter) {
      classN = 'projectFilterActive';
    }
    if (type === 'closeCount' && filter) {
      classN = 'projectFilterActive';
    }
  }

  if (dataType === sortType) classN = 'sortActive';

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={classN}
      css={btnStyle}
      onClick={handleClick}
      data-type={dataType}
      data-name={dataName}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export { Button };
