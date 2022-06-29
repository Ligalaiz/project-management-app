import React, { FC } from 'react';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { IInput } from '@src/store/board/Board.types';
import * as i from './Input.style';

const Input: FC<IInput> = ({ type, testId, name, placeholder, children, register, errors, handleChange }) => {
  const { lang } = useTypedUseSelector((state) => state.board);
  let inputStyle = i.input;
  let spanStyle = i.errorMessage;
  let wrapStyle = i.wrap;
  let labelStyle = null;

  if (name === 'switcher') {
    spanStyle = i[`${name}Message`];
    labelStyle = i[`${name}Label`];
    inputStyle = i[`${name}`];
    wrapStyle = i[`${name}Wrap`];
  }

  return (
    <div css={wrapStyle}>
      <label css={labelStyle}>
        {type.match(/switcher/) ? children : null}
        <input
          {...(name?.match(/name|mail|password/g) && register && register(`${name}`))}
          {...(name === 'switcher' && { defaultChecked: lang === 'ru' })}
          placeholder={name === 'switcher' ? '' : placeholder}
          {...(name === 'switcher' && { onChange: handleChange })}
          data-testid={testId}
          css={inputStyle}
          type={type}
        />
        <span className="slider round" css={spanStyle}>
          {name === 'switcher' ? '' : errors?.[`${name}`]?.message}
        </span>
      </label>
    </div>
  );
};

export { Input };
