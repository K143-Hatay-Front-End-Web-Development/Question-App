import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    identifier: yup
        .string()
        .email('Lütfen geçerli bir email adresi giriniz')
        .required('Email adresi zorunludur'),
    password: yup
        .string()
        .min(6, 'Şifreniz en az 6 karakter olmalıdır.')
        .max(36, 'Şifreniz en fazla 36 karakter olmalıdır.')
        .required('Şifrenizi girmeniz zorunludur')
})