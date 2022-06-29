import React, { ChangeEvent, FC, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { set } from '@src/utils';
import { useAction } from '@src/hooks/useAction';

import * as s from './SearchField.style';

interface ISearchField {
  handleKey: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ handleKey }) => {
  const { searchQuery } = useTypedUseSelector((state) => state.board);
  const { setSearch } = useAction();
  const { t } = useTranslation();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target as typeof e.target & {
      value: string;
    };

    setSearch(value);
    set('searchQuery', value);
  };

  return (
    <div css={s.searchContainer}>
      <input
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKey}
        css={s.searchField}
        type="text"
        placeholder={t('search_placeholder')}
        minLength={3}
        maxLength={30}
      />
    </div>
  );
};

export { SearchField };
