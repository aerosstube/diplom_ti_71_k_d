import jwt from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '../../../hooks';
import {authAPI} from '../../../services/AuthService';
import {UserSlice, UserState} from '../../../store/reducers/UserSlice';
import cl from '../RegForm/RegForm.module.css';
import {useNavigate} from "react-router-dom";
import img from "../../../img/logo2.png";
import {Button, Input} from "antd";

const AuthForm = () => {
    const [loginUser, {data: tokens, error}] = authAPI.useUserLoginMutation();

    const [password, setPassword] = useState('');
    const [passwordDirt, setPasswordDirt] = useState(false);
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    const [login, setLogin] = useState('');
    const [loginDirt, setLoginDirt] = useState(false);
    const [loginError, setLoginError] = useState('Логин не может быть пустым');

    const [valid, setValid] = useState(false)
    // @ts-ignore
    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'login': {
                setLoginDirt(true);
                break;
            }
            case 'password': {
                setPasswordDirt(true);
                break;
            }

        }
    }

    // @ts-ignore
    const handleCheckPassword = (e) => {
        setPassword(e.target.value);
        if (!regExpPassword.test(String(e.target.value))) {
            setPasswordError('Пароль должен содержать одну заглавную и строчную букву и быть не короче 8 символов!')
        } else {
            setPasswordError('')
        }
    }
    // @ts-ignore
    const handleCheckLogin = (e) => {
        setLogin(e.target.value);
        if (e.target.value.split('').length > 0) {
            setLoginError('')
        } else {
            setLoginError('Логин не может быть пустым')
        }
    }
    const {addUser} = UserSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const goToSchedule = (isTeacher: boolean) => {
        if (isTeacher) {
            navigate('/groups')
        } else {
            navigate('/schedule')
        }
    };

    const handleSend = async () => {
        const user = {
            login,
            password
        };
        await loginUser(user);
        setLogin('');
        setPassword('')
    };

    useEffect(() => {
        if (loginError || passwordError) {
            setValid(false);
        } else setValid(true)
    }, [passwordError, loginError])

    useEffect(() => {
        if (tokens) {

            const response: UserState = {
                user: jwt(tokens.tokens.accessToken),
                tokens,
                isLogged: true
            };
            dispatch(addUser(response));
            goToSchedule(response.user.isTeacher);
        }
        if (error) {
            console.log(error);
        }
    }, [tokens, error]);

    return (
        <form className={cl.mainContainer}>
            <img src={img} alt="" className={cl.regImg}/>
            <p className={cl.regText}>Добро пожаловать в электронный школьный портал!</p>
            <Input
                placeholder="Логин"
                name='login'
                className={cl.regInp}
                onChange={e => handleCheckLogin(e)}
                onBlur={e => handleBlur(e)}
            />
            {(loginError && loginDirt) && <p className={cl.error}>{loginError}</p>}
            <Input.Password
                placeholder="Пароль"
                name='password'
                className={cl.regInp}
                onChange={e => handleCheckPassword(e)}
                onBlur={e => (handleBlur(e))}
            />
            {(passwordError && passwordDirt) && <p className={cl.error}>{passwordError}</p>}
            {error && <p className={cl.error}>Ошибка авторизации</p>}
            <Button
                type="primary"
                className={cl.regBut}
                onClick={handleSend}
                disabled={!valid}
            >
                Войти
            </Button>
        </form>
    );
};

export default AuthForm;