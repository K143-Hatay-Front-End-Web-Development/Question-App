import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import { controlAsync, logoutAsync } from '../store/userSlice';
import Style from './style.module.scss';

const DefaultLayout = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    useEffect(() => {
        dispatch(controlAsync())
    }, [dispatch]);

    return (
        <div>
            <header className={Style.Header}>
                <Link to="/">
                    <img src="/logo.svg" className={Style.logo} alt="logo" />
                </Link>
                <p>Questions</p>
                <div className={Style.user}>
                    <span>
                    {
                        user.user.username
                    }
                    </span>
                    {
                        user.isAuth &&
                        <Button onClick={() => dispatch(logoutAsync())} title="Çıkış" />
                    }
                </div>
            </header>
            <main>
                {
                    user.isAuth &&
                    <ul>
                        <li>
                            <Link to="/list-question">Soru Listesi</Link>
                        </li>
                        <li>
                            <Link to="/add-question">Soru Ekle</Link>
                        </li>
                    </ul>
                }
                {
                    props.children
                }
            </main>
            <footer className={Style.Footer}>
                Footer
            </footer>
        </div>
    )
}

export default DefaultLayout