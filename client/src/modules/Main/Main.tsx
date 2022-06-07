import React, { MouseEvent, useState, useEffect, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { IBoard, IColumns, ITask } from '@src/store/board/Board.types';
import { SearchField } from '@components/SearchField';
import { Submenu } from '@components/Submenu';
import { Button } from '@components/Button';
import { set } from '@src/utils';
import { Modal } from '@components/Modal';
import * as m from './Main.style';

const Main = () => {
  const { boards, filter, sortType, searchQuery } = useTypedUseSelector((state) => state.board);
  const { setBoard, editBoard, setFilter, setSortType } = useAction();
  const [isModal, setIsModal] = useState(false);
  const { t } = useTranslation();
  const [isSortSubmenu, setIsSortSubmenu] = useState(false);
  const [isProjectSubmenu, setIsProjectSubmenu] = useState<number | null>(null);
  const [delBoard, setDelBoard] = useState<IBoard | null>(null);
  const [filtredBoard, setFiltredBoard] = useState<IBoard[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    set('boards', boards);
  }, [boards]);

  const handleBoardClick = (board: IBoard) => {
    setBoard(board.id);
    set('boardId', board.id);
    navigate(`/board/${board.id}`);
  };

  const handleCloseSortSubmenu = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const {
      dataset: { type },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
      };
    };

    if (type === 'submenu') {
      setIsSortSubmenu(!isSortSubmenu);
    } else {
      setIsSortSubmenu(false);
    }
    handleSort(e);
  };

  const handleSort = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const {
      dataset: { type },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
      };
    };

    if (type === 'newestSort') {
      setSortType('newestSort');
      set('sortType', 'newestSort');
    }
    if (type === 'oldestSort') {
      setSortType('oldestSort');
      set('sortType', 'oldestSort');
    }
    if (type === 'updatedSort') {
      setSortType('updatedSort');
      set('sortType', 'updatedSort');
    }
    if (type === 'leastUpdatedSort') {
      setSortType('leastUpdatedSort');
      set('sortType', 'leastUpdatedSort');
    }
    if (type === 'nameSort') {
      setSortType('nameSort');
      set('sortType', 'nameSort');
    }
  };

  const handleCloseProjectSubmenu = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>, board?: IBoard) => {
    const {
      dataset: { type },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
      };
    };

    if (type === 'submenu') {
      if (board) {
        setIsProjectSubmenu(isProjectSubmenu === board.id ? null : board.id);
      }
      handleCloseModal(e);
    } else {
      setIsProjectSubmenu(null);
    }
  };

  const handleCloseModal = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>, board?: IBoard) => {
    const {
      dataset: { type },
    } = e.target as typeof e.target & {
      dataset: {
        type: string;
      };
    };

    if (type === 'projectEdit') {
      if (board) {
        setDelBoard(board);
        setIsProjectSubmenu(null);
      }
      setIsModal(!isModal);
    }

    if (type === 'close') setIsModal(!isModal);
    if (type === 'projectClose' || type === 'projectReopen') {
      if (board) {
        editBoard({ id: board.id, status: !board.status });
        setIsProjectSubmenu(null);
      }
    }
  };

  const getStatus = () => {
    const count = boards.reduce((acc: number, cur: IBoard) => {
      if (cur.status) {
        acc += 1;
      }
      return acc;
    }, 0);

    return { open: boards.length - count, close: count };
  };

  const getFiltredBoards = () => {
    const closeFiltred = boards.filter((item) => item.status === filter);
    const searchFiltred = closeFiltred.filter((board: IBoard) => {
      const regex = new RegExp(searchQuery, 'gi');
      const tasks = board.columns;

      const participant = tasks.filter((column: IColumns) => {
        const result = column.items.filter((item: ITask) => {
          return item?.executor && item.executor?.name.search(regex) !== -1;
        });
        return result.length !== 0;
      });
      return board.title.search(regex) !== -1 || board.description.search(regex) !== -1 || participant.length !== 0;
    });

    let sorted = searchFiltred;
    if (sortType === 'newestSort') sorted = [...searchFiltred].sort((a, b) => b.createDate - a.createDate);
    if (sortType === 'oldestSort') sorted = [...searchFiltred].sort((a, b) => a.createDate - b.createDate);
    if (sortType === 'updatedSort') sorted = [...searchFiltred].sort((a, b) => b.updated - a.updated);
    if (sortType === 'leastUpdatedSort') sorted = [...searchFiltred].sort((a, b) => a.updated - b.updated);
    if (sortType === 'nameSort') sorted = [...searchFiltred].sort();

    setFiltredBoard(sorted);
  };

  const handleSearchPressKey = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getFiltredBoards();
    }
  };

  const messageContent = {
    open: {
      title: t('board.open_message_title'),
      desc: t('board.open_message_desc'),
    },
    close: {
      title: t('board.close_message_title'),
      desc: t('board.close_message_desc'),
    },
  };

  const message = filter ? messageContent.close : messageContent.open;

  useEffect(() => {
    getFiltredBoards();
  }, [filter, sortType, boards]);

  return (
    <div className="container" css={m.tableWrap}>
      <SearchField handleKey={handleSearchPressKey} />
      <div css={m.table}>
        <div css={m.title}>
          <div css={m.state}>
            <Button
              type="openCount"
              dataType="filterProject"
              handleClick={() => {
                setFilter(false);
                set('filter', false);
              }}
              title={`${getStatus().open} ${t('open')}`}
            />
            <Button
              type="closeCount"
              dataType="filterProject"
              handleClick={() => {
                setFilter(true);
                set('filter', true);
              }}
              title={`${getStatus().close} ${t('close')}`}
            />
          </div>
          <div css={m.sortWrap}>
            <button
              type="button"
              css={isSortSubmenu ? m.sortActive : m.sort}
              onClick={handleCloseSortSubmenu}
              data-type="submenu"
            >
              {t('sort')}
            </button>
            {isSortSubmenu && <Submenu target="submenuSort" handleClose={handleCloseSortSubmenu} />}
          </div>
        </div>
        <ul className="reset-list">
          {filtredBoard.length === 0 ? (
            <div css={m.messageWrap}>
              <div css={m.message}>
                <h2 css={m.messageTitle}>{message.title}</h2>
                <p>{message.desc}</p>
              </div>
            </div>
          ) : (
            filtredBoard.map((item) => {
              const date = new Date(item.updated).toUTCString();
              return (
                <li key={item.id} css={m.project}>
                  <div css={m.projectWrap}>
                    <div css={m.projectParam}>
                      <p css={filter ? m.projectTitleClose : m.projectTitle}>
                        <span css={m.projectText} onClick={() => handleBoardClick(item)}>
                          {item.title}
                        </span>
                      </p>
                      <p css={m.projectUpdated}>Updated {date}</p>
                    </div>
                    <p css={m.projectDesc}>{item.description}</p>
                  </div>
                  <button
                    type="button"
                    data-type="submenu"
                    css={isProjectSubmenu === item.id ? m.menuBtnActive : m.menuBtn}
                    onClick={(e) => handleCloseProjectSubmenu(e, item)}
                  />
                  {isProjectSubmenu === item.id && (
                    <Submenu
                      target={item.status ? 'projectClose' : 'projectOpen'}
                      handleClose={(e) => handleCloseModal(e, item)}
                    />
                  )}
                </li>
              );
            })
          )}
        </ul>
      </div>
      {isModal && <Modal type="eboard" handleClose={handleCloseModal} board={delBoard} />}
    </div>
  );
};

export { Main };
