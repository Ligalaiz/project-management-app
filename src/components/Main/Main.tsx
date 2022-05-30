import React, { MouseEvent, useState, useEffect, KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { IBoard } from '@src/store/board/Board.types';
import { SearchField } from '@components/SearchField';
import { Submenu } from '@components/Submenu';
import { Button } from '@components/Button';
import { Modal } from '@components/Modal';
import * as m from './Main.style';

const Main = () => {
  const { boards, filter, sortType, searchQuery } = useTypedUseSelector((state) => state.board);
  const { setBoard, editBoard, setFilter, setSortType } = useAction();
  const [isModal, setIsModal] = useState(false);
  const [isSortSubmenu, setIsSortSubmenu] = useState(false);
  const [isProjectSubmenu, setIsProjectSubmenu] = useState<number | null>(null);
  const [delBoard, setDelBoard] = useState<IBoard | null>(null);
  const [filtredBoard, setFiltredBoard] = useState<IBoard[]>([]);
  const navigate = useNavigate();

  const handleBoardClick = (board: IBoard) => {
    setBoard(board.id);
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

    if (type === 'newestSort') setSortType('newestSort');
    if (type === 'oldestSort') setSortType('oldestSort');
    if (type === 'updatedSort') setSortType('updatedSort');
    if (type === 'leastUpdatedSort') setSortType('leastUpdatedSort');
    if (type === 'nameSort') setSortType('nameSort');
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
    const searchFiltred = closeFiltred.filter((item) => {
      const regex = new RegExp(searchQuery, 'gi');
      return item.title.search(regex) !== -1 || item.description.search(regex) !== -1;
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
      title: 'No closed projects',
      desc: 'No projects have been closed yet. You can close projects from the projects list or a project’s menu.',
    },
    close: {
      title: 'No open projects',
      desc: 'No projects have been closed yet. You can close projects from the projects list or a project’s menu.',
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
              handleClick={() => setFilter(false)}
              title={`${getStatus().open} Open`}
            />
            <Button
              type="closeCount"
              dataType="filterProject"
              handleClick={() => setFilter(true)}
              title={`${getStatus().close} Close`}
            />
          </div>
          <div css={m.sortWrap}>
            <button type="button" css={m.sort} onClick={handleCloseSortSubmenu} data-type="submenu">
              Sort
            </button>
            {isSortSubmenu && <Submenu target="submenuSort" handleClose={handleCloseSortSubmenu} />}
          </div>
        </div>
        <ul className="reset-list">
          {filtredBoard.length === 0 ? (
            <div css={m.messageWrap}>
              <div css={m.message}>
                <h2 css={m.messageTitle}>{message.title}</h2>
                <p>message.desc</p>
              </div>
            </div>
          ) : (
            filtredBoard.map((item) => {
              const date = new Date(item.updated).toUTCString();
              return (
                <li key={item.id} css={m.project}>
                  <div css={m.projectParam}>
                    <p css={filter ? m.projectTitleClose : m.projectTitle}>
                      <span css={m.projectText} onClick={() => handleBoardClick(item)}>
                        {item.title}
                      </span>
                    </p>
                    <p css={m.projectUpdated}>Updated {date}</p>
                  </div>
                  <p css={m.projectDesc}>{item.description}</p>
                  <button
                    type="button"
                    data-type="submenu"
                    css={m.menuBtn}
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
