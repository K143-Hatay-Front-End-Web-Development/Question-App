import React from 'react';
import Style from './style.module.scss';

const Input = ({id, name, placeholder, title, type, value, setValue, error}) => {

  return (
    <label className={Style.Label}>
        <span>{title}</span>
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={setValue}
            placeholder={placeholder}
        />
        {
            error && <strong>{error}</strong>
        }
    </label>
  )
}

export default Input;
