import React from 'react';
import { useTranslation } from 'react-i18next';
import { ISubmenu } from '@src/store/board/Board.types';
import { Button } from '@components/Button';
import * as s from './Submenu.style';

const Submenu = ({ target, handleClose }: ISubmenu) => {
  const { t } = useTranslation();
  let wrapStyle = s.wrapColumn;
  let delTitle = `${t('delete')} ${t('task')}`;
  let editTitle = t('task');
  let type = '';

  if (target === 'task') wrapStyle = s.wrapTask;
  if (target === 'column') {
    editTitle = t('column');
    delTitle = `${t('delete')} ${t('column')}`;
  }

  if (target === 'projectOpen' || target === 'projectClose') {
    delTitle = `${target === 'projectOpen' ? t('close') : t('reopen')} ${t('project')}`;
    type = target === 'projectOpen' ? 'Close' : 'Reopen';
    editTitle = t('project');
    wrapStyle = s.wrapProject;
    target = 'project';
  }
  const boardView = (
    <div css={wrapStyle}>
      <Button title={`${t('edit')} ${editTitle}`} dataType={`${target}Edit`} type="submenu" handleClick={handleClose} />
      <Button
        title={`${delTitle}`}
        dataType={`${target}${target === 'task' || target === 'column' ? 'Delete' : type}`}
        type="submenu"
        handleClick={handleClose}
      />
    </div>
  );

  const sortView = (
    <div css={s.wrapTable}>
      <p css={s.titleSbmenu}>{t('sort_by')}</p>
      <Button title={t('newest')} dataType="newestSort" type="submenuSort" handleClick={handleClose} />
      <Button title={t('oldest')} dataType="oldestSort" type="submenuSort" handleClick={handleClose} />
      <Button title={t('updated')} dataType="updatedSort" type="submenuSort" handleClick={handleClose} />
      <Button title={t('last_updated')} dataType="leastUpdatedSort" type="submenuSort" handleClick={handleClose} />
      <Button title={t('name')} dataType="nameSort" type="submenuSort" handleClick={handleClose} />
    </div>
  );

  return <>{target === 'submenuSort' ? sortView : boardView}</>;
};

export { Submenu };
