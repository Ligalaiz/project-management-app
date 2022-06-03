import React, { FC } from 'react';
import { IInput } from '@src/store/board/Board.types';
import * as i from './Input.style';

const Input: FC<IInput> = ({ type, testId, name, placeholder, children, register, errors }) => {
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
          {...(name === 'switcher' && { defaultChecked: false })}
          placeholder={name === 'switcher' ? '' : placeholder}
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
