export const set = (name: string, value: any): void => window.localStorage.setItem(name, JSON.stringify(value));

export const get = (name: string): any => {
  const result = localStorage.getItem(name);
  return result ? JSON.parse(result) : null;
};

export const del = (name: string): void => localStorage.removeItem(name);
