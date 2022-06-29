import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { Input } from '@components/Input';
import { errorBoundary } from '@src/hoc/errorBoundary';
import { IForm, ILoginValues } from '@src/store/form/Form.types';

interface IField {
  type?: string;
  name: 'name' | 'mail' | 'password';
  errors?: any;
  children?: string;
  title?: string;
  register: UseFormRegister<IForm | ILoginValues>;
}

const InputWithWithErrorBoundary = errorBoundary(Input);

const Field: FC<IField> = ({ title, name, children, type = '', register, errors }) => {
  return (
    <InputWithWithErrorBoundary
      name={name}
      type={type}
      register={register}
      placeholder={title}
      testId={`${name}Field`}
      errors={errors}
    >
      {children}
    </InputWithWithErrorBoundary>
  );
};

export { Field };
