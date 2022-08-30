import React from 'react';
import Style from './style.module.scss';

const TextH2 = ({ text }) => {
  return (
    <h2 className={Style.H2} >{text}</h2>
  )
}

export default TextH2;