interface IContent {
  title: string;
  btn: { type: string; title: string };
  btnDel?: { type: string; title: string };
}

interface ITextMap {
  atask: IContent;
  dtask: IContent;
  acolumn: IContent;
  dcolumn: IContent;
  сboard: IContent;
  [key: string]: IContent;
}

const textMap: ITextMap = {
  atask: {
    title: 'Add a task',
    btn: {
      type: 'create',
      title: 'Add',
    },
  },
  dtask: {
    title: 'Delete a task',
    btn: {
      type: 'delete',
      title: 'Delete',
    },
  },
  etask: {
    title: 'Edit a task',
    btn: {
      type: 'create',
      title: 'Edit task',
    },
  },
  acolumn: {
    title: 'Add a column',
    btn: {
      type: 'create',
      title: 'Create column',
    },
  },
  dcolumn: {
    title: 'Delete',
    btn: {
      type: 'delete',
      title: 'Delete column',
    },
  },
  ecolumn: {
    title: 'Edit a column',
    btn: {
      type: 'create',
      title: 'Edit column',
    },
  },
  eboard: {
    title: 'Edit project',
    btn: {
      type: 'create',
      title: 'Save project',
    },
    btnDel: {
      type: 'delete',
      title: 'Delete project',
    },
  },
  сboard: {
    title: 'Create a new project',
    btn: {
      type: 'create',
      title: 'Create project',
    },
  },
};

export { textMap };
