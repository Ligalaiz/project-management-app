import { del, get, set } from '@utils/storage.utils';
import { LocalStorageMock } from '@src/internals/mocks';

const KEY = 'foo';
const KEY_NOT_EXIST = 'boo';
const VALUE = 'bar';

describe('Storage functions', () => {
  const originalLocalStorage = global.localStorage;

  beforeAll(() => {
    (global as any).localStorage = new LocalStorageMock();
  });

  afterAll(() => {
    (global as any).localStorage = originalLocalStorage;
  });

  it('set check set data to localStorage', () => {
    set(KEY, VALUE);

    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, `${'"bar"'}`);
  });

  it('get check get data from localStorage | data exist', () => {
    const result = get(KEY);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
    expect(result).toBe(VALUE);
  });

  it('get check get data from localStorage | data no exist', () => {
    const result = get(KEY_NOT_EXIST);

    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY_NOT_EXIST);
    expect(result).toBeNull();
  });

  it('del check delete data from localStorage', () => {
    del(KEY);

    expect(localStorage.removeItem).toHaveBeenLastCalledWith(KEY);
  });
});
