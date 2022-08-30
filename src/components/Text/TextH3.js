import React from 'react';
import Style from './style.module.scss';

const TextH3 = ({ text }) => {
  return (
    <h3 className={Style.H3} >{text}</h3>
  )
}

export default TextH3;