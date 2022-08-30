import React from 'react';
import Style from './style.module.scss';

const TextH1 = ({ text }) => {
  return (
    <h1 className={Style.H1} >{text}</h1>
  )
}

export default TextH1;
