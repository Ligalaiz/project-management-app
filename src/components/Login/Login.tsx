import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Message } from '@components/Message';
import { Button } from '@components/Button';
import { Field } from '@components/Field';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { ILoginValues, IUser, IForm } from '@src/store/form/Form.types';
import { get } from '@src/utils';
import { loginDB } from '@utils/auth.utils';
import { loginResolver } from './Login.resolver';
import * as f from './Login.style';

const Form: FC = () => {
  const { user, users, loginFields, isDisabled, isSubmit } = useTypedUseSelector((state) => state.form);
  const { setUser, setLoginFields, setFormIsSubmit, setFormBtnIsDisabled } = useAction();
  const [checkUser, setCheckUser] = useState(false);
  const registeredUsers = get('users') || [];
  const navigate = useNavigate();

  const defaultValues = {
    mail: '',
    password: '',
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid, isDirty, isSubmitted },
  } = useForm<IForm | ILoginValues>({
    resolver: loginResolver,
    mode: 'onSubmit',
    defaultValues,
  });

  const onSubmit: SubmitHandler<IForm | ILoginValues> = (data) => {
    const userExist = registeredUsers.find((item: IUser) => item.mail === data.mail && item.password === data.password);
    if (!userExist) setCheckUser(true);
    setTimeout(() => {
      setCheckUser(false);
    }, 3000);

    if (userExist) {
      setCheckUser(false);
      loginDB(userExist);
      setUser({ user: userExist });
      setFormIsSubmit({ isSubmit: true });
      setTimeout(() => {
        setFormIsSubmit({ isSubmit: false });
        navigate('/', { replace: true });
      }, 3000);
      setLoginFields({ loginFields: null });
      setTimeout(() => reset());
    }
  };

  useEffect(() => {
    setFormBtnIsDisabled({ isDisabled: !isSubmitted ? !isDirty : !isValid });
    const subscription = watch((value) => {
      const adaptValue = {
        mail: value.mail ?? '',
        password: value.password ?? '',
      };

      setLoginFields({ loginFields: adaptValue });
    });
    return () => subscription.unsubscribe();
  }, [isDirty, isSubmitted, isValid]);

  useEffect(() => {
    if (loginFields) {
      Object.keys(loginFields).forEach((key) => {
        setValue(`${key}`, loginFields[key], { shouldDirty: true });
      });
    }
  }, []);

  return (
    <div className="container" css={f.formWrap}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" css={f.form} data-testid="form">
        <Field register={register} type="text" errors={errors} name="mail" />
        <Field register={register} type="text" errors={errors} name="password" />
        <Button disabled={isDisabled} type="submit" testid="formBtn" title="Submit" />
      </form>
      {(isSubmit || checkUser) && (
        <Message err={checkUser} content={checkUser ? 'Пользователь с таким mail не существует' : 'Login successful'} />
      )}
    </div>
  );
};

export { Form };
