import React from 'react';
import Style from './style.module.scss';

const Card = ({title, subTitle, result, style = {}}) => {
  return (
    <div className={Style.Container + ' row'}>
        <div className={Style.row} style={style}>
            <div className={Style.title}>{title}</div>
            <div className={Style.subTitle}>{subTitle}</div>
            <div className={Style.result}>{result}</div>
        </div>
    </div>
  )
}

export default Card