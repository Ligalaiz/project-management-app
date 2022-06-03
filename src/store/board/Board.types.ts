import { MutableRefObject, MouseEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { textMap } from '@src/components/Modal/Modal.map';
import { IForm, ILoginValues } from '@src/store/form/Form.types';

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

export interface IBoard {
  id: number;
  creator: string;
  title: string;
  description: string;
  status: boolean;
  columnsPosition: IColumnPosition[];
  columns: IColumns[];
  tasksCount: number;
  columnCount: number;
  boardPosition: IBoardPosition | null;
  targetColumn: number | null;
  createDate: number;
  updated: number;
}

export interface IEditBoard {
  id: number;
  title?: string;
  description?: string;
  status?: boolean;
  createDate?: number;
  updated?: number;
}

export interface IInitialBoardState {
  boards: IBoard[];
  boardId: number | null;
  filter: boolean;
  sortType: string;
  searchQuery: string;
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
  dataName?: string;
  disabled?: boolean;
  testid?: string;
  handleClick?: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export interface IDefaultColumns {
  column: IColumns;
  board: IBoard;
  handleDrag: () => void;
  [key: string]: any;
}

export interface IModal {
  title?: string;
  column?: IColumns;
  task?: ITask;
  board?: IBoard | null;
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

export interface IInput {
  type: string;
  testId: string;
  placeholder?: string;
  name?: 'name' | 'mail' | 'switcher' | 'password';
  children?: string;
  errors?: any;
  register?: UseFormRegister<IForm | ILoginValues>;
}

export interface IHandlersMap {
  [key: string]: (e: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export interface ITasks {
  column: IColumns;
}
