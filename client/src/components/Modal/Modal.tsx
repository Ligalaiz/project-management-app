import React, { FC, MouseEvent, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAction } from '@src/hooks/useAction';
import { IModal, IBoard, IHandlersMap } from '@src/store/board/Board.types';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { Button } from '@components/Button';
import { delUser } from '@utils/auth.utils';
import { textMap } from './Modal.map';
import * as m from './Modal.style';

const Modal: FC<IModal> = ({ title, type, handleClose, column, task, board }) => {
  const {
    setColumnCount,
    setColumn,
    setTaskCount,
    setTask,
    removeColumn,
    removeTask,
    editColumn,
    editTask,
    delBoard,
    editBoard,
    createBoard,
    removeUser,
    setError,
  } = useAction();
  const { t } = useTranslation();
  const { boards } = useTypedUseSelector((state) => state.board);
  const { user, users } = useTypedUseSelector((state) => state.form);
  const [columnField, setColumnField] = useState(type === 'ecolumn' ? column!.title : '');
  const [taskTitle, setTaskTitle] = useState(type === 'etask' ? task!.title : '');
  const [taskContent, setTaskContent] = useState(type === 'etask' ? task!.content : '');
  const [boardTitle, setBoardTitle] = useState(type === 'eboard' ? board!.title : '');
  const [boardDesc, setBoardDesc] = useState(type === 'eboard' ? board!.description : '');
  const [executorId, setExecutorId] = useState('');
  const config = textMap[type];
  const navigate = useNavigate();

  const handleAddColumn = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();

    if (columnField.length > 3) {
      if (board) {
        const columnTemplate = {
          id: board.columnCount,
          title: columnField,
          type: columnField,
          content: '',
          items: [],
        };
        setColumn(columnTemplate);
        setColumnCount(board.columnCount + 1);
        editBoard({ id: board.id, updated: Date.now() });
      }

      handleClose(e);
      setColumnField('');
    }
  };

  const handleEditColumn = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();

    if (columnField?.length > 3 && column) {
      const columnEdit = {
        title: columnField,
        type: columnField,
      };

      editColumn({ columnEdit, columnId: column.id });
      handleClose(e);
      setColumnField('');

      if (board) {
        editBoard({ id: board.id, updated: Date.now() });
      }
    }
  };

  const handleDelColumn = () => {
    if (column && board) {
      removeColumn(column.id);
      setTaskCount(board.tasksCount - 1);
      editBoard({ id: board.id, updated: Date.now() });
    }
  };

  const handleAddTask = () => {
    if (column && board) {
      const executor = users.find((item) => item.id === executorId);

      const taskTemplate = {
        id: board.tasksCount,
        title: `${taskTitle}`,
        content: `${taskContent}`,
        status: column.type,
        creator: user,
        executor: executor || null,
      };

      setTask({ task: taskTemplate, targetColumn: column.id });
      setTaskCount(board.tasksCount + 1);
      editBoard({ id: board.id, updated: Date.now() });
    }
  };

  const handleEditTask = () => {
    if (column && task) {
      const executor = users.find((item) => item.id === executorId);
      const taskTemplate = { title: `${taskTitle}`, content: `${taskContent}`, executor };

      editTask({ task: taskTemplate, targetTask: task.id, targetColumn: column.id });

      if (board) {
        editBoard({ id: board.id, updated: Date.now() });
      }
    }
  };

  const handleDelTask = () => {
    if (column && task && board) {
      if (task?.creator?.id === user?.id) {
        removeTask({ taskId: task.id, columnId: column.id });
        setTaskCount(board.tasksCount - 1);
        editBoard({ id: board.id, updated: Date.now() });
      } else {
        setError({ error: { message: 'You are not creator' } });
        setTimeout(() => {
          setError({ error: null });
        }, 3000);
      }
    }
  };

  const handleDelUser = () => {
    delUser();
    removeUser();
    navigate('/main');
  };

  const handleEditBoard = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const {
      dataset: { name },
    } = e.target as typeof e.target & {
      dataset: {
        name: string;
      };
    };

    const newProject: IBoard = {
      id: boards.length,
      creator: '',
      title: boardTitle,
      status: false,
      description: boardDesc,
      columnsPosition: [],
      tasksCount: 0,
      columnCount: 0,
      columns: [],
      boardPosition: null,
      targetColumn: null,
      createDate: Date.now(),
      updated: Date.now(),
    };

    if (board) {
      if (name === 'deleteBtn') delBoard(board.id);
      if (name === 'editBtn')
        editBoard({ id: board.id, title: boardTitle, description: boardDesc, updated: Date.now() });
    }

    if (name === 'createBtn') createBoard(newProject);
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const target = e.target as typeof e.target & {
      value: string;
    };
    setExecutorId(target.value);
  };

  const columnView = (
    <>
      <p css={m.columnName}>{t('modal.column_name')}</p>
      <input
        value={columnField}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const castEvent = event as unknown as ChangeEvent<HTMLInputElement>;
          setColumnField(castEvent.target.value);
        }}
        css={m.columnTitle}
        type="text"
        placeholder={t('modal.column_view_title')}
        minLength={3}
        maxLength={30}
        autoFocus
      />
    </>
  );

  const taskView = (
    <>
      <input
        value={taskTitle}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const castEvent = event as unknown as ChangeEvent<HTMLInputElement>;
          setTaskTitle(castEvent.target.value);
        }}
        css={m.taskTitle}
        type="text"
        placeholder={t('modal.task_view_title')}
        minLength={3}
        maxLength={30}
        autoFocus
      />
      <textarea
        value={taskContent}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          const castEvent = event as unknown as ChangeEvent<HTMLTextAreaElement>;
          setTaskContent(castEvent.target.value);
        }}
        cols={30}
        rows={10}
        placeholder={t('modal.task_view_desc')}
        css={m.taskField}
      />
      <div>
        <p>Executor:</p>
        <select onChange={handleChange} value={executorId} css={m.taskSelect}>
          <option value=""> -- select executer -- </option>
          {users.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );

  const projectView = (
    <>
      <input
        value={boardTitle}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const castEvent = event as unknown as ChangeEvent<HTMLInputElement>;
          setBoardTitle(castEvent.target.value);
        }}
        css={m.taskTitle}
        type="text"
        placeholder={t('modal.project_view_title')}
        minLength={3}
        maxLength={30}
        autoFocus
      />
      <textarea
        value={boardDesc}
        onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
          const castEvent = event as unknown as ChangeEvent<HTMLTextAreaElement>;
          setBoardDesc(castEvent.target.value);
        }}
        cols={30}
        rows={10}
        placeholder={t('modal.project_view_desc')}
        css={m.taskField}
      />
    </>
  );

  const handlersMap: IHandlersMap = {
    acolumn: handleAddColumn,
    dcolumn: handleDelColumn,
    ecolumn: handleEditColumn,
    atask: handleAddTask,
    dtask: handleDelTask,
    etask: handleEditTask,
    eboard: handleEditBoard,
    сboard: handleEditBoard,
    duser: handleDelUser,
  };

  return (
    <div css={m.modalWrap} data-type="close" onClick={handleClose}>
      <div css={m.modal}>
        <div css={m.title}>
          <p>
            {t(`${type}.title`)} {title}
          </p>
          <Button type="close" handleClick={handleClose} dataType="close" />
        </div>
        <div css={m.contentWrap}>
          <div css={m.content}>
            {(type === 'atask' || type === 'etask') && taskView}
            {(type === 'eboard' || type === 'сboard') && projectView}
            {(type === 'acolumn' || type === 'ecolumn') && columnView}
            {type === 'dcolumn' && <p>{t('modal.delete_column')}</p>}
            {type === 'dtask' && <p>{t('modal.delete_task')}</p>}
            {type === 'duser' && <p>{t('modal.delete_user')}</p>}
          </div>
          <div css={m.btnWrap}>
            <Button
              type={config.btn.type}
              title={t(`${type}.btn.title`)}
              handleClick={handlersMap[type] && handlersMap[type]}
              dataType="close"
              dataName={type === 'сboard' ? 'createBtn' : 'editBtn'}
            />
            <Button title={t('cancel')} handleClick={handleClose} dataType="close" />
          </div>
          {type === 'eboard' && (
            <div css={m.delBoardWrap}>
              <p css={m.delTitle}>{t('delete_project')}</p>
              <p css={m.delText}>
                {t('modal.delete_board_part1')} {`"${board && board.title}"`} {t('modal.delete_board_part2')}
              </p>
              <Button
                type={config?.btnDel?.type}
                title={t(`${type}.btnDel.title`)}
                handleClick={handlersMap[type] && handlersMap[type]}
                dataType="close"
                dataName="deleteBtn"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { Modal };
