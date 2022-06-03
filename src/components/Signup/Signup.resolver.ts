import { Resolver } from 'react-hook-form';
import { isNameValid, isPassValid, isMailValid } from '@src/utils';
import { IForm, ISignupPull, IErrorMessageSignupMap, ILoginValues, IError } from '@src/store/form/Form.types';

const signupResolver: Resolver<IForm | ILoginValues> = (values) => {
  const { name, mail, password } = values;
  const validationPull: ISignupPull = {
    name: isNameValid(name || ''),
    mail: isMailValid(mail || ''),
    password: isPassValid(password || ''),
  };

  const errorMessageMap: IErrorMessageSignupMap = {
    name: 'name field required /en',
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

export { signupResolver };
