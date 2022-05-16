export interface IColumsPosition {
  width: number;
  heigth: number;
  [key: string]: number;
}

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
}

export interface IGetColumn {
  target: number;
  columns: IColumns[];
  boardPosition: IBoardPosition;
}

export interface IColumns {
  id: number;
  title: string;
  type: string;
  [key: string]: string | number;
}

export interface IReorder {
  type: string;
  tasks: ITask[];
}
export interface IInitialBoardState {
  columsPosition: IColumsPosition[];
  columns: IColumns[];
  tasks: {
    [key: string]: ITask[];
  };
  boardPosition: IBoardPosition | null;
  dragStartPosition: string | null;
  error: { message: string } | null;
}

export interface SetPositionColumnsAction {
  columsPosition: IColumsPosition;
}

export interface SetBoardPositionAction {
  boardPosition: IBoardPosition;
}

export interface SetErrorAction {
  error: { message: string } | null;
}
