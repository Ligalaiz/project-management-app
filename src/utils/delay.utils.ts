const delay = (cb: () => void, ms: number) =>
  setTimeout(() => {
    cb();
  }, ms);

export { delay };
