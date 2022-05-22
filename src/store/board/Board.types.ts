import { MutableRefObject, MouseEvent } from 'react';
import { textMap } from '@src/components/Modal/Modal.map';

export interface IBoardPosition {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

export interface ITask {
  id: number;
  title: string;
  status: string;
  [key: string]: string | number;
}

export interface ITaskItem {
  task: ITask;
  column: IColumns;
}

export interface IGetColumn {
  target: number;
  columnsPosition: IColumnPosition[];
}

export interface IPosition {
  bottom: number | null;
  height: number | null;
  left: number | null;
  right: number | null;
  top: number | null;
  width: number | null;
  x: number | null;
  y: number | null;
  [key: string]: any;
}

export interface IColumns {
  id: number;
  title: string;
  content: string;
  type: string;
  items: ITask[];
  [key: string]: string | number | ITask[] | IPosition;
}

export interface IReorder {
  id: number;
  tasks: ITask[];
}

export interface IColumnPosition {
  id: number;
  position: IPosition;
}

export interface IInitialBoardState {
  columnsPosition: IColumnPosition[];
  columns: IColumns[];
  tasksCount: number;
  columnCount: number;
  boardPosition: IBoardPosition | null;
  targetColumn: number | null;
  error: { message: string } | null;
}

export interface SetBoardPositionAction {
  boardPosition: IBoardPosition;
}

export interface SetErrorAction {
  error: { message: string } | null;
}

export interface IColumnRef {
  [key: string]: HTMLDivElement;
}

export interface IPositionArr {
  columns: IColumns[];
  columnsRef: MutableRefObject<IColumnRef>;
}

export interface IButton {
  type?: string;
  title?: string;
  dataType?: string;
  handleClick?: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export interface IDefaultColumns {
  column: IColumns;
  handleDrag: () => void;
  [key: string]: any;
}

export interface IModal {
  title?: string;
  column?: IColumns;
  task?: ITask;
  type: keyof typeof textMap;
  handleClose: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export interface ISubmenu {
  target: string;
  handleClose: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export interface IHandleDragEnd {
  point: { x: number; y: number };
}

export interface IRemoveTask {
  taskId: number;
  columnId: number;
}

export interface ISetTask {
  task: ITask;
  targetColumn: number;
}

export interface IEditColumn {
  columnId: number;
  columnEdit: { title: string; type: string };
}

export interface IEditTask {
  targetTask: number;
  targetColumn: number;
  task: { title: string; content: string };
}
