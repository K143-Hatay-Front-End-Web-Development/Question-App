import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuestionAsync } from '../../store/questionSlice';
import Style from './style.module.scss';

const Item = ({ id, question, answerA, answerB, answerC, currentAnswer})  => {
  const dispatch = useDispatch();


  const update = (value) => {
    dispatch(updateQuestionAsync({
      id,
      currentAnswer: value
    }))
  }


  return (
    <div className={Style.Container}>
        <div className={Style.question}>{id}) {question}</div>
        <div className={Style.answers}>
            <div
              onClick={() => update('A')}
              className={currentAnswer === 'A' ? Style.current : Style.wrong}>{answerA}</div>
            <div
              onClick={() => update('B')}
              className={currentAnswer === 'B' ? Style.current : Style.wrong}>{answerB}</div>
            <div
              onClick={() => update('C')}
              className={currentAnswer === 'C' ? Style.current : Style.wrong}>{answerC}</div>
        </div>
    </div>
  )
}

export default Item