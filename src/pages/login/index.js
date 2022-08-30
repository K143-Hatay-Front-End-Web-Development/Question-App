import { useFormik } from 'formik';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Button, TextH3 } from '../../components';
import { loginSchema } from '../../constants/loginYup';
import { loginAsync } from '../../store/userSlice';
import Style from './style.module.scss';

const Login = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues: {
            identifier: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: async values => {
            dispatch(loginAsync(values));
        },
    });

  return (
    <div className={Style.Login}>
        <div className={Style.container}>
            <TextH3 text="GİRİŞ" />
            <Input
                title="E-mail"
                type="text"
                id="identifier"
                name="identifier"
                setValue={formik.handleChange}
                value={formik.values.identifier}
                error={formik.errors.identifier}
                placeholder="E-mail adresini giriniz"
                />
            <Input
                title="Şifre"
                type="password"
                error={formik.errors.password}
                id="password"
                name="password"
                setValue={formik.handleChange}
                value={formik.values.password}
                placeholder="Şifrenizi giriniz"
                />
            <Button disabled={user.loading} title="Giriş" onClick={formik.handleSubmit} />
        </div>
    </div>
  )
}

export default Login