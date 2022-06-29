import { createSlice } from '@reduxjs/toolkit';
import { get } from '@src/utils';
import { IInitialFormState } from './Form.types';
import { formReducer } from './Form.reducer';

const initialFormState: IInitialFormState = {
  signupFields: null,
  loginFields: null,
  userCount: get('userCount') || 0,
  user: get('user') || null,
  // users: [
  // { name: 'Vasy', mail: 'v@mail.com', password: '1234', id: '1' },
  // { name: 'Pety', mail: 'p@mail.com', password: '1234', id: '2' },
  // ],
  users: get('users') || [],
  isSubmit: false,
  isDisabled: false,
};

const FormSlice = createSlice({
  name: 'form',
  initialState: initialFormState,
  reducers: formReducer,
});

const FormActions = FormSlice.actions;
const FormReducer = FormSlice.reducer;

export { FormReducer, FormActions };
