import { FieldError } from 'react-hook-form';

export interface IForm {
  name: string;
  mail: string;
  password: string;
  [key: string]: string | number;
}

export interface IUser {
  name: string;
  mail: string;
  password: string;
  id: string;
  [key: string]: string | number;
}
export interface ILoginValues {
  mail: string;
  password: string;
  [key: string]: string;
}

export interface IInitialFormState {
  signupFields: IForm | null;
  loginFields: ILoginValues | null;
  user: IUser | null;
  userCount: number;
  isSubmit: boolean;
  isDisabled: boolean;
  users: IUser[];
}

export interface SetSignupFieldsAction {
  signupFields: IForm | null;
}

export interface SetLoginFieldsAction {
  loginFields: ILoginValues | null;
}

export interface SetUserAction {
  user: IUser | null;
}

export interface SetUsersAction {
  user: IUser;
}

export interface SetEditAction {
  user: IUser;
}

export interface SetCurrentUserAction {
  currentUser: ILoginValues | null;
}

export interface SetFormIsSubmitAction {
  isSubmit: boolean;
}

export interface SetFormBtnIsDisabledAction {
  isDisabled: boolean;
}

export interface ISignupPull {
  name: boolean;
  mail: boolean;
  password: boolean;
  [key: string]: boolean;
}

export interface ILoginPull {
  mail: boolean;
  password: boolean;
  [key: string]: boolean;
}

export interface IErrorMessageSignupMap {
  name: string;
  mail: string;
  password: string;
  [key: string]: string;
}

export interface IErrorMessageLoginMap {
  mail: string;
  password: string;
  [key: string]: string;
}

export interface IError {
  [key: string]: FieldError;
}
