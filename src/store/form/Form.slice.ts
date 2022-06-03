import { createSlice } from '@reduxjs/toolkit';
import { IInitialFormState } from './Form.types';
import { formReducer } from './Form.reducer';

const initialFormState: IInitialFormState = {
  signupFields: null,
  loginFields: null,
  userCount: 0,
  user: null,
  users: [],
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
