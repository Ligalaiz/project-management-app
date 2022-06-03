import { Resolver } from 'react-hook-form';
import { isMailValid, isPassValid } from '@src/utils';
import { ILoginValues, ILoginPull, IForm, IError, IErrorMessageLoginMap } from '@src/store/form/Form.types';

const loginResolver: Resolver<IForm | ILoginValues> = (values) => {
  const { mail, password } = values;
  const validationPull: ILoginPull = {
    mail: isMailValid(mail || ''),
    password: isPassValid(password || ''),
  };

  const errorMessageMap: IErrorMessageLoginMap = {
    mail: 'mail field required',
    password: 'password field required',
  };

  const isFormValid = Object.keys(validationPull).reduce((errorExist: boolean, key: string) => {
    if (validationPull?.[key] === false) {
      errorExist = false;
    }

    return errorExist;
  }, true);

  let errors: IError = {};

  if (!isFormValid) {
    errors = Object.keys(validationPull).reduce((error: IError, key: string) => {
      if (validationPull?.[key] === false) {
        error = { ...error, [key]: { type: 'required', message: errorMessageMap[key] } };
      }

      return error;
    }, {});
  }

  return {
    values: isFormValid ? values : {},
    errors: !isFormValid ? errors : {},
  };
};

export { loginResolver };
