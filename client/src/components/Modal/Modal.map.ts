interface IContent {
  btn: { type: string };
  btnDel?: { type: string };
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
    btn: {
      type: 'create',
    },
  },
  dtask: {
    btn: {
      type: 'delete',
    },
  },
  etask: {
    btn: {
      type: 'create',
    },
  },
  acolumn: {
    btn: {
      type: 'create',
    },
  },
  dcolumn: {
    btn: {
      type: 'delete',
    },
  },
  ecolumn: {
    btn: {
      type: 'create',
    },
  },
  eboard: {
    btn: {
      type: 'create',
    },
    btnDel: {
      type: 'delete',
    },
  },
  сboard: {
    btn: {
      type: 'create',
    },
  },
  duser: {
    btn: {
      type: 'delete',
    },
  },
};

export { textMap };
