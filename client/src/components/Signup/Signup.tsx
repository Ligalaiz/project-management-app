import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Message } from '@components/Message';
import { Button } from '@components/Button';
import { Field } from '@components/Field';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { get, set } from '@src/utils';
import { registrationDB, editUserDB } from '@utils/auth.utils';
import { IForm, IUser, ILoginValues } from '@src/store/form/Form.types';
import { signupResolver } from './Signup.resolver';
import * as f from './Signup.style';

const Signin: FC = () => {
  const { user, isDisabled, userCount, isSubmit } = useTypedUseSelector((state) => state.form);
  const [checkUser, setCheckUser] = useState(false);
  const { setUsers, editUser, setSignupFields, setFormIsSubmit, setFormBtnIsDisabled } = useAction();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const registeredUsers = get('users') || [];
  const isEdit = pathname.match(/edit/g);
  const defaultValues = {
    name: isEdit ? user!.name : '',
    mail: isEdit ? user!.mail : '',
    password: isEdit ? user!.password : '',
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid, isDirty, isSubmitted },
  } = useForm<IForm | ILoginValues>({
    resolver: signupResolver,
    mode: 'onSubmit',
    defaultValues,
  });

  const onSubmit: SubmitHandler<IForm | ILoginValues> = (data) => {
    const userExist = registeredUsers.find((item: IUser) => item.mail === data.mail);
    if (userExist && !isEdit) setCheckUser(true);

    setTimeout(() => {
      setCheckUser(false);
    }, 3000);

    if (!userExist && !isEdit) {
      const id = `${userCount + 1}`;

      const currentData: IUser = {
        name: data.name,
        password: data.password,
        mail: data.mail,
        id,
      };

      setUsers({ user: currentData });
      set('userCount', userCount);
      set('users', [...(get('user') || []), userCount]);
      registrationDB([{ ...data, id }, ...registeredUsers]);
    }

    if (isEdit) {
      const currentData: IUser = {
        name: data.name,
        password: data.password,
        mail: data.mail,
        id: user!.id,
      };

      editUser({ user: currentData });
      editUserDB(currentData);
    }

    if ((!userExist && !isEdit) || (userExist && isEdit)) {
      setFormIsSubmit({ isSubmit: true });
      setTimeout(() => {
        setFormIsSubmit({ isSubmit: false });
        if (!userExist && !isEdit) navigate('/login', { replace: true });
      }, 3000);
      setTimeout(() => reset());
      setSignupFields({ signupFields: null });
    }
  };

  useEffect(() => {
    setFormBtnIsDisabled({ isDisabled: !isSubmitted ? !isDirty : !isValid });

    const subscription = watch((value) => {
      const adaptValue = {
        name: value.name ?? '',
        mail: value.mail ?? '',
        password: value.password ?? '',
      };

      setSignupFields({ signupFields: adaptValue });
    });
    return () => subscription.unsubscribe();
  }, [isDirty, isSubmitted, isValid]);

  useEffect(() => {
    if (user) {
      Object.keys(user).forEach((key) => {
        setValue(`${key}`, user[key], { shouldDirty: true });
      });
    }
  }, []);

  let content = t('user.signup_success');
  if (checkUser) content = t('user.exist');
  if (isEdit) content = t('edit_success');

  return (
    <div className="container" css={f.formWrap}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" css={f.form} data-testid="form">
        <Field register={register} type="text" errors={errors} name="name" title={t('user.name')} />
        <Field register={register} type="text" errors={errors} name="mail" title={t('user.mail')} />
        <Field register={register} type="text" errors={errors} name="password" title={t('user.password')} />
        <Button disabled={isDisabled} type="submit" testid="formBtn" title={isEdit ? t('user.edit') : t('user.reg')} />
      </form>
      {(isSubmit || checkUser) && <Message err={checkUser} content={content} />}
    </div>
  );
};

export { Signin };
