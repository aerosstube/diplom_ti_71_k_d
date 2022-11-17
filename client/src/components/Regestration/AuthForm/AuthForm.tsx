import {Button, TextField} from '@mui/material';
import jwt from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '../../../hooks/hook';
import {authAPI} from '../../../services/AuthService';
import {UserSlice, UserState} from '../../../store/reducers/UserSlice';
import cl from './AuthForm.module.css';
import shp from './image-ep0zmoEb0-transformed.png';
import {useLocation, useNavigate} from "react-router-dom";

const AuthForm = () => {
    const [loginUser, {data: tokens, error}] = authAPI.useUserLoginMutation();
    const {addUser} = UserSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.state;
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const goToSchedule = () => navigate(fromPage? fromPage : '/schedule')

    const handleSend = async () => {
        const user = {
            login,
            password
        };
        await loginUser(user);
        setLogin('');
        setPassword('')
        goToSchedule();
    };

    useEffect(() => {
        if (tokens) {
            console.log(tokens);
            const response: UserState = {
                user: jwt(tokens.tokens.accessToken),
                tokens,
                isLogged: true
            };
            dispatch(addUser(response));
        }
        if (error) {
            console.log(error);
        }
    }, [tokens, error]);

    return (
        <form className={cl.formReg}>
            <img
                src={shp} alt="лого"
                className={cl.imgReg}
            />
            <p className={cl.textReg}>Добро пожаловать на школьный портал!</p>
            <TextField
                value={login}
                id="outlined-name"
                label="Log in"
                className={cl.inpReg}
                onChange={(e) => setLogin(e.target.value)}
            />
            <TextField
                value={password}
                id="outlined-name"
                label="Password"
                className={cl.inputReg}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button className={cl.buttonReg} onClick={handleSend}>ВОЙТИ</Button>
            {error && <p style={{color: 'red'}}>Ошибка авторизации!</p>}
        </form>
    );
};

export default AuthForm;