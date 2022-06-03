import React, { FC, MouseEvent, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
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
  } = useAction();
  const { boards } = useTypedUseSelector((state) => state.board);
  const [columnField, setColumnField] = useState(type === 'ecolumn' ? column!.title : '');
  const [taskTitle, setTaskTitle] = useState(type === 'etask' ? task!.title : '');
  const [taskContent, setTaskContent] = useState(type === 'etask' ? task!.content : '');
  const [boardTitle, setBoardTitle] = useState(type === 'eboard' ? board!.title : '');
  const [boardDesc, setBoardDesc] = useState(type === 'eboard' ? board!.description : '');
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
      const taskTemplate = {
        id: board.tasksCount,
        title: `${taskTitle}`,
        content: `${taskContent}`,
        status: column.type,
      };

      setTask({ task: taskTemplate, targetColumn: column.id });
      setTaskCount(board.tasksCount + 1);
      editBoard({ id: board.id, updated: Date.now() });
    }
  };

  const handleEditTask = () => {
    if (column && task) {
      const taskTemplate = { title: `${taskTitle}`, content: `${taskContent}` };

      editTask({ task: taskTemplate, targetTask: task.id, targetColumn: column.id });

      if (board) {
        editBoard({ id: board.id, updated: Date.now() });
      }
    }
  };

  const handleDelTask = () => {
    if (column && task && board) {
      removeTask({ taskId: task.id, columnId: column.id });
      setTaskCount(board.tasksCount - 1);
      editBoard({ id: board.id, updated: Date.now() });
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

  const columnView = (
    <>
      <p css={m.columnName}>Column name</p>
      <input
        value={columnField}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const castEvent = event as unknown as ChangeEvent<HTMLInputElement>;
          setColumnField(castEvent.target.value);
        }}
        css={m.columnTitle}
        type="text"
        placeholder="Enter a column name more 3 symbols (To Do, In Progress, Done)"
        minLength={3}
        maxLength={10}
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
        placeholder="Enter a task name"
        minLength={3}
        maxLength={10}
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
        placeholder="Enter a note"
        css={m.taskField}
      />
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
        placeholder="Enter a project board name"
        minLength={3}
        maxLength={10}
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
        placeholder="Description (optional)"
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
            {config.title} {title}
          </p>
          <Button type="close" handleClick={handleClose} dataType="close" />
        </div>
        <div css={m.contentWrap}>
          <div css={m.content}>
            {(type === 'atask' || type === 'etask') && taskView}
            {(type === 'eboard' || type === 'сboard') && projectView}
            {(type === 'acolumn' || type === 'ecolumn') && columnView}
            {type === 'dcolumn' && <p>This action will remove any cards associated with the column.</p>}
            {type === 'dtask' && <p>This will remove this note from the project.</p>}
            {type === 'duser' && <p>This will remove user from App.</p>}
          </div>
          <div css={m.btnWrap}>
            <Button
              {...config.btn}
              handleClick={handlersMap[type] && handlersMap[type]}
              dataType="close"
              dataName={type === 'сboard' ? 'createBtn' : 'editBtn'}
            />
            <Button title="Cancel" handleClick={handleClose} dataType="close" />
          </div>
          {type === 'eboard' && (
            <div css={m.delBoardWrap}>
              <p css={m.delTitle}>Delete project</p>
              <p css={m.delText}>This will remove this board {`"${board && board.title}"`} from the task manager.</p>
              <Button
                {...config.btnDel}
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
