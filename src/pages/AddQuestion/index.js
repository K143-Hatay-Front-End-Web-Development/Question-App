import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Button, Input } from '../../components'
import { questionSchema } from '../../constants/questionYup';
import Style from './style.module.scss';
import Radio from '../../components/radio';
import { clearNotification, setQuestionAsync } from '../../store/questionSlice';

const AddQuestion = () => {
  const dispatch = useDispatch();
  const question = useSelector(state => state.question)

  const formik = useFormik({
    initialValues: {
      question: '',
      answerA: '',
      answerB: '',
      answerC: '',
      currentAnswer: ''
    },
    validationSchema: questionSchema,
    onSubmit: async values => {
      dispatch(setQuestionAsync({ data: values}));
    },
  });

  useEffect(() => {
    if(question.error) {
      toast.error(question.error);
    }
    else if(question.message) {
      toast.info(question.message);
    }
    
    dispatch(clearNotification())
  }, [dispatch, question.error, question.message])


  return (
    <div className={Style.AddQuestion}>
      <div className={Style.container}>
        <Input
          title="Soru"
          type="text"
          id="question"
          name="question"
          setValue={formik.handleChange}
          value={formik.values.question}
          error={formik.errors.question}
          placeholder="Soru giriniz"
        />

        <Input
          title="A Şıkkı"
          type="text"
          id="answerA"
          name="answerA"
          setValue={formik.handleChange}
          value={formik.values.answerA}
          error={formik.errors.answerA}
          placeholder="A şıkkını giriniz"
        />

        <Input
          title="B Şıkkı"
          type="text"
          id="answerB"
          name="answerB"
          setValue={formik.handleChange}
          value={formik.values.answerB}
          error={formik.errors.answerB}
          placeholder="B şıkkını giriniz"
        />

        <Input
          title="C Şıkkı"
          type="text"
          id="answerC"
          name="answerC"
          setValue={formik.handleChange}
          value={formik.values.answerC}
          error={formik.errors.answerC}
          placeholder="C şıkkını giriniz"
        />

        <Radio
          title="Cevap"
          name="currentAnswer"
          list={[
            {
              title: 'A',
              value: 'A'
            },
            {
              title: 'B',
              value: 'B'
            },
            {
              title: 'C',
              value: 'C'
            }
          ]}
          field={{...formik.getFieldProps("currentAnswer")} }
          error={formik.errors.currentAnswer}
          setValue={formik.handleChange}
          value={formik.values.currentAnswer}
          />

        <Button disabled={question.loading} title="Kaydet" onClick={formik.handleSubmit} />
      </div>



    </div>
  )
}

export default AddQuestion