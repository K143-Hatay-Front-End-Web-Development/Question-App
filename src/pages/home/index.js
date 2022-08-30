import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card';
import { getQuestionAsync } from '../../store/questionSlice';

const Home = () => {
  const dispatch = useDispatch();
  const question = useSelector(state => state.question);
  const [count, setCount] = useState({a: 0, b: 0, c: 0})

  useEffect(() => {
    if(question.list.length === 0) {
      dispatch(getQuestionAsync());
    }
  }, [dispatch, question.list.length]);

  useEffect(() => {
    const counts = {a: 0, b: 0, c: 0}
    question.list.forEach(item => {
      console.log(item.attributes)
      counts.a += item.attributes.currentAnswer === 'A' ? 1 : 0;
      counts.b += item.attributes.currentAnswer === 'B' ? 1 : 0;
      counts.c += item.attributes.currentAnswer === 'C' ? 1 : 0;
    });
    setCount(counts);
  }, [question.list])


  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Card 
        title="Toplam"
        subTitle="Toplam Soru Sayısı"
        result={question.list.length}
        style={{background: '#ff8e4c', color: 'white'}}
        />
      <Card 
        title="Toplam A"
        subTitle="Toplam A Sayısı"
        result={count.a}
        style={{background: '#4dacff', color: 'white'}}
        />
      <Card 
        title="Toplam B"
        subTitle="Toplam B Sayısı"
        result={count.b}
        style={{background: '#ff4d9f', color: 'white'}}
        />
      <Card 
        title="Toplam C"
        subTitle="Toplam C Sayısı"
        result={count.c}
        style={{background: '#3dd58f', color: 'white'}}
        />
      
    </div>
  )
}

export default Home