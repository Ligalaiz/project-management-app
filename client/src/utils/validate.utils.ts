const isPassValid = (val: string): boolean => {
  if (!val) return false;
  return val.length >= 4 && val.length <= 20;
};

const isNameValid = (val: string): boolean => {
  if (!val) return false;
  return val.length > 0 && /^[A-Za-z]+$/.test(val) && Number.isNaN(+val) && !parseFloat(val);
};

const isMailValid = (val: string): boolean => {
  if (!val) return false;
  return !!String(val)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export { isPassValid, isNameValid, isMailValid };
