import React, { FC, MouseEvent, useState, ChangeEvent } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { IModal } from '@src/store/board/Board.types';
import { Button } from '@components/Button';
import { textMap } from './Modal.map';
import * as m from './Modal.style';

const Modal: FC<IModal> = ({ title, type, handleClose, column, task }) => {
  const { columnCount, tasksCount } = useTypedUseSelector((state) => state.board);
  const { setColumnCount, setColumn, setTaskCount, setTask, removeColumn, removeTask, editColumn, editTask } =
    useAction();
  const [columnField, setColumnField] = useState(type === 'ecolumn' ? column!.title : '');
  const [taskTitle, setTaskTitle] = useState(type === 'etask' ? task!.title : '');
  const [taskContent, setTaskContent] = useState(type === 'etask' ? task!.content : '');
  const config = textMap[type];

  const handleAddColumn = (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    e.stopPropagation();
    if (columnField.length > 3) {
      const columntTemplate = {
        id: columnCount,
        title: columnField,
        type: columnField,
        content: '',
        items: [],
      };
      setColumn(columntTemplate);
      setColumnCount(columnCount + 1);
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
    }
  };

  const handleAddTask = () => {
    if (column) {
      const taskTemplate = { id: tasksCount, title: `${taskTitle}`, content: `${taskContent}`, status: column.type };

      setTask({ task: taskTemplate, targetColumn: column.id });
      setTaskCount(tasksCount + 1);
    }
  };

  const handleEditTask = () => {
    if (column && task) {
      const taskTemplate = { title: `${taskTitle}`, content: `${taskContent}` };

      editTask({ task: taskTemplate, targetTask: task.id, targetColumn: column.id });
    }
  };

  const handleDelColumn = () => {
    if (column) {
      removeColumn(column.id);
      setTaskCount(tasksCount - 1);
    }
  };

  const handleDelTask = () => {
    if (column && task) {
      removeTask({ taskId: task.id, columnId: column.id });
      setTaskCount(tasksCount - 1);
    }
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
        placeholder="Enter a column name (To Do, In Progress, Done)"
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

  interface IHandlersMap {
    [key: string]: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
  }

  const handlersMap: IHandlersMap = {
    acolumn: handleAddColumn,
    dcolumn: handleDelColumn,
    ecolumn: handleEditColumn,
    atask: handleAddTask,
    dtask: handleDelTask,
    etask: handleEditTask,
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
            {(type === 'acolumn' || type === 'ecolumn') && columnView}
            {type === 'dcolumn' && <p>This action will remove any cards associated with the column.</p>}
            {type === 'dtask' && <p>This will remove this note from the project.</p>}
          </div>
          <div css={m.btnWrap}>
            <Button {...config.btn} handleClick={handlersMap[type] && handlersMap[type]} dataType="close" />
            <Button title="Cancel" handleClick={handleClose} dataType="close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Modal };
