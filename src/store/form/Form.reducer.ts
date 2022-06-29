import { PayloadAction } from '@reduxjs/toolkit';
import {
  SetUserAction,
  IInitialFormState,
  SetFormIsSubmitAction,
  SetFormBtnIsDisabledAction,
  SetSignupFieldsAction,
  SetLoginFieldsAction,
  SetEditAction,
  SetUsersAction,
  IUser,
} from './Form.types';

const formReducer = {
  setUser: (state: IInitialFormState, action: PayloadAction<SetUserAction>) => {
    let isUser = action.payload.user;
    if (isUser) {
      const currentUser = state.users.find((item: IUser) => item.mail === isUser?.mail);
      if (currentUser) isUser = currentUser;
    }
    state.user = isUser;
  },

  setUsers: (state: IInitialFormState, action: PayloadAction<SetUsersAction>) => {
    state.users = [...state.users, action.payload.user];
    state.userCount += 1;
  },

  editUser: (state: IInitialFormState, action: PayloadAction<SetEditAction>) => {
    const editUser = action.payload.user;
    state.users = [
      ...state.users.map((item) => {
        if (state.user && item.mail === state.user.mail) {
          return editUser;
        }
        return item;
      }),
    ];
    state.user = editUser;
  },

  removeUser: (state: IInitialFormState) => {
    const filtredUser = state.users.filter((item) => state.user && item.id !== state.user.id);
    state.users = filtredUser;
    state.userCount = state.userCount > 0 ? (state.userCount -= 1) : state.userCount;
    state.user = null;
  },

  logoutUser: (state: IInitialFormState) => {
    state.user = null;
  },

  setSignupFields: (state: IInitialFormState, action: PayloadAction<SetSignupFieldsAction>) => {
    state.signupFields = action.payload.signupFields;
  },

  setLoginFields: (state: IInitialFormState, action: PayloadAction<SetLoginFieldsAction>) => {
    state.loginFields = action.payload.loginFields;
  },

  setFormIsSubmit: (state: IInitialFormState, action: PayloadAction<SetFormIsSubmitAction>) => {
    state.isSubmit = action.payload.isSubmit;
  },

  setFormBtnIsDisabled: (state: IInitialFormState, action: PayloadAction<SetFormBtnIsDisabledAction>) => {
    state.isDisabled = action.payload.isDisabled;
  },
};

export { formReducer };
