import * as yup from 'yup';

export const questionSchema = yup.object().shape({
    question: yup
        .string()
        .min(6, 'Sorular en az 6 karakter olmalıdır.')
        .max(144, 'Sorular en fazla 144 karakter olmalıdır.')
        .required('Sorunun eklenmesi zorunludur'),
    answerA: yup
        .string()
        .min(1, 'Sorular en az 1 karakter olmalıdır.')
        .max(64, 'Sorular en fazla 64 karakter olmalıdır.')
        .required('A şıkkının eklenmesi zorunludur'),
    answerB: yup
        .string()
        .min(1, 'Sorular en az 1 karakter olmalıdır.')
        .max(64, 'Sorular en fazla 64 karakter olmalıdır.')
        .required('A şıkkının eklenmesi zorunludur'),
    answerC: yup
        .string()
        .min(1, 'Sorular en az 1 karakter olmalıdır.')
        .max(64, 'Sorular en fazla 64 karakter olmalıdır.')
        .required('A şıkkının eklenmesi zorunludur'),
    currentAnswer: yup
        .string()
        .required('Doğru cevabın seçilmesi zorunludur'),
})