import React from 'react';
import Style from './style.module.scss';

const Radio = ({field, name, list, title, setValue, error}) => 
  <div className={Style.Label}>
    <span>{title}</span>
    <div className={Style.radioList}>
      {
        list.map(item => 
          <label key={item.title}>
            <b>{item.title}</b>
            <input
              {...field}
              type="radio"
              name={name}
              value={item.value}
              onChange={setValue} />
          </label>
        ) 
      }
    </div>
    {
        error && <strong>{error}</strong>
    }
  </div>

export default Radio;
