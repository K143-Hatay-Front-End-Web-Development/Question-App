import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Item from '../../components/item';
import { clearNotification, getQuestionAsync } from '../../store/questionSlice';
import Style from './style.module.scss';

const List = () => {
  const dispatch = useDispatch();
  const question = useSelector(state => state.question);
  const [list, setList] = useState([]);

  useEffect(() => {
    if(question.error) {
      toast.error(question.error);
    }
    else if(question.message) {
      toast.info(question.message);
    }
    
    dispatch(clearNotification())
  }, [dispatch, question.error, question.message])

  useEffect(() => {
    dispatch(getQuestionAsync())
  }, [dispatch]);

  useEffect(() => {
    const newList = [...question.list];
    newList.sort((a, b) => a.id - b.id);
    setList(newList);
  }, [question.list])

  return (
    <div className={Style.Container}>
      {
        list.map(item =>
          <Item
            key={item.id}
            id={item.id}
            question={item.attributes.question}
            answerA={item.attributes.answerA}
            answerB={item.attributes.answerB}
            answerC={item.attributes.answerC}
            currentAnswer={item.attributes.currentAnswer}
            />
        )
      }


    </div>
  )
}

export default List