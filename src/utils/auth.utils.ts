import { set, del, get } from '@src/utils';
import { IUser, ILoginValues, IForm } from '@src/store/form/Form.types';

const registrationDB = (users: IUser[]) => {
  set('users', users);
  return true;
};

const editUserDB = (user: IUser) => {
  const users = get('users');
  const userDB = get('user');
  set('user', user);
  set('users', [
    ...users.map((item: IUser) => {
      if (item.mail === userDB.mail) {
        return user;
      }
      return item;
    }),
  ]);
  return true;
};

const loginDB = (user: IForm | ILoginValues) => {
  set('user', user);
  return false;
};

const logout = () => {
  del('user');
  return true;
};

const delUser = () => {
  const currentUser = get('user');
  const users = get('users');
  const filtredUser = users.filter((item: IUser) => item.id !== currentUser.id);
  set('users', filtredUser);
  del('user');
  return true;
};

export { registrationDB, logout, loginDB, delUser, editUserDB };
