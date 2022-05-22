import React from 'react';
import { ISubmenu } from '@src/store/board/Board.types';
import { Button } from '@components/Button';
import * as s from './Submenu.style';

const Submenu = ({ target, handleClose }: ISubmenu) => {
  return (
    <div css={target === 'column' ? s.wrapColumn : s.wrapTask}>
      <Button title={`Edit ${target}`} dataType={`${target}Edit`} type="submenu" handleClick={handleClose} />
      <Button title={`Delete ${target}`} dataType={`${target}Delete`} type="submenu" handleClick={handleClose} />
    </div>
  );
};

export { Submenu };
