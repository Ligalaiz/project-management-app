import React from 'react';
import { ISubmenu } from '@src/store/board/Board.types';
import { Button } from '@components/Button';
import * as s from './Submenu.style';

const Submenu = ({ target, handleClose }: ISubmenu) => {
  let wrapStyle = s.wrapColumn;
  let title = '';

  if (target === 'task') wrapStyle = s.wrapTask;
  if (target === 'projectOpen' || target === 'projectClose') {
    title = target === 'projectOpen' ? 'Close' : 'Reopen';
    wrapStyle = s.wrapProject;
    target = 'project';
  }

  const boardView = (
    <div css={wrapStyle}>
      <Button title={`Edit ${target}`} dataType={`${target}Edit`} type="submenu" handleClick={handleClose} />
      <Button
        title={`${target === 'task' ? 'Delete' : title} ${target === 'task' ? 'task' : 'project'}`}
        dataType={`${target}${target === 'task' ? 'Delete' : title}`}
        type="submenu"
        handleClick={handleClose}
      />
    </div>
  );

  const sortView = (
    <div css={s.wrapTable}>
      <p css={s.titleSbmenu}>Sort by</p>
      <Button title="Newest" dataType="newestSort" type="submenuSort" handleClick={handleClose} />
      <Button title="Oldest" dataType="oldestSort" type="submenuSort" handleClick={handleClose} />
      <Button title="Recently updated" dataType="updatedSort" type="submenuSort" handleClick={handleClose} />
      <Button title="Least recently updated" dataType="leastUpdatedSort" type="submenuSort" handleClick={handleClose} />
      <Button title="Name" dataType="nameSort" type="submenuSort" handleClick={handleClose} />
    </div>
  );

  return <>{target === 'submenuSort' ? sortView : boardView}</>;
};

export { Submenu };
