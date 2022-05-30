import React, { ChangeEvent, FC, KeyboardEvent } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';

import * as s from './SearchField.style';

interface ISearchField {
  handleKey: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ handleKey }) => {
  const { searchQuery } = useTypedUseSelector((state) => state.board);
  const { setSearch } = useAction();

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target as typeof e.target & {
      value: string;
    };

    setSearch(value);
  };

  return (
    <div css={s.searchContainer}>
      <input
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKey}
        css={s.searchField}
        type="text"
        placeholder="Search all project"
        minLength={3}
        maxLength={10}
      />
    </div>
  );
};

export { SearchField };
