import React from 'react';
import Style from './style.module.scss';

const Button = ({ title, onClick, disabled }) => {
  return (
    <label className={Style.Label}>
      {
        disabled ?
        <button type="button" disabled>{title}</button>
        :
        <button type="button" onClick={onClick}>{title}</button>
      }
    </label>
  )
}

export default Button;
