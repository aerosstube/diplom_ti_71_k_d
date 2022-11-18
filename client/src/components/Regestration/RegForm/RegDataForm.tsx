import {Button, TextField} from '@mui/material';
import jwt from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {useAppDispatch} from '../../../hooks/hook';
import {authAPI} from '../../../services/AuthService';
import {UserSlice, UserState} from '../../../store/reducers/UserSlice';
import cl from './RegDataForm.module.css';

const RegDataForm = () => {
    const [userRegestration, {data: tokens, isLoading, error}] = authAPI.useUserRegestrationMutation();
    const {addUser} = UserSlice.actions;
    const dispatch = useAppDispatch();

    const [login, setLogin] = useState('');
    const [loginDirt, setLoginDirt] = useState(false);
    const [loginError, setLoginError] = useState('Логин не может быть пустым');

    const [password, setPassword] = useState('');
    const [passwordDirt, setPasswordDirt] = useState(false);
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');

    const [fio, setFio] = useState('');
    const [fioDirt, setFioDirt] = useState(false);
    const [fioError, setFioError] = useState('ФИО не может быть пустым');

    const [phone, setPhone] = useState('');

    const [email, setEmail] = useState('');
    const [emailDirt, setEmailDirt] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым!');

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dateOfBirthDirt, setDateOfBirthDirt] = useState(false);
    const [dateOfBirthError, setDateOfBirthError] = useState('Дата не может быть пустой!');

    const [valid, setValid] = useState(false);

    const regExpDate=/^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/;
    const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const regExpEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // @ts-ignore
    const handleBlur = (e) => {
        switch (e.target.name) {
            case 'email': {
                setEmailDirt(true);
                break;
            }
            case 'password': {
                setPasswordDirt(true);
                break;
            }
            case 'fio': {
                setFioDirt(true);
                break;
            }
            case 'date': {
                setDateOfBirthDirt(true);
                break;
            }
            case 'login':{
                setLoginDirt(true);
                break;
            }
        }
    }

    // @ts-ignore
    const handleCheckEmail = (e) => {
        setEmail(e.target.value);

        if (!regExpEmail.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email неправильного формата!')
        } else {
            setEmailError('')
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
    const handleCheckFio = (e) => {
        setFio(e.target.value);
        const checkArr = e.target.value.split(' ');
        if ((checkArr.length < 2) || (checkArr[checkArr.length-1] === '')) {
            setFioError('ФИО должно обязательно содержать имя и фамилию');
        } else {
            setFioError('')
        }
    }
    // @ts-ignore
    const handleCheckDate = (e) => {
        setDateOfBirth(e.target.value);
        if (!regExpDate.test(String(e.target.value))) {
            setDateOfBirthError('Неправильный формат даты(ДД.ММ.ГГГГ)')
        } else {
            setDateOfBirthError('')
        }
    }
    // @ts-ignore
    const handleLogin = (e) => {
        setLogin(e.target.value);
        if (e.target.value.split('').length>0) {
            setLoginError('')
        }
    }


    useEffect(() => {
        if (emailError || passwordError || fioError) {
            setValid(false);
        } else setValid(true)
    }, [emailError, passwordError, fioError])

    const handleSend = async () => {
        const user = {
            login,
            password,
            firstName: fio.split(' ')[0],
            secondName: fio.split(' ')[1],
            middleName: fio.split(' ')[2],
            mobilePhone: phone,
            eMail: email,
            dateOfBirthday: dateOfBirth,
            inviteCode: '24'
        };

        await userRegestration(user);
    };

    useEffect(() => {
        if (tokens) {
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
        <div className={cl.mainBlock}>
            <p className={cl.dataText}>Введите необходитмую для продолжения информацию:</p>
            <TextField
                value={login}
                id="outlined-name"
                label="Login"
                name='login'
                className={cl.inpData}
                onChange={(e) => handleLogin(e)}
                onBlur={event => handleBlur(event)}
            />
             {(loginDirt && loginError) && <div>{loginError}</div>}
            <TextField
                value={password}
                type="password"
                id="outlined-name"
                label="Password"
                name='password'
                className={cl.inpData}
                onChange={(e) => handleCheckPassword(e)}
                onBlur={event => handleBlur(event)}
            />
            {(passwordDirt && passwordError) && <div>{passwordError}</div>}
            <TextField
                value={fio}
                id="outlined-name"
                label="FIO"
                name='fio'
                className={cl.inpData}
                onChange={(e) => handleCheckFio(e)}
                onBlur={event => handleBlur(event)}
            />
            {(fioDirt && fioError) && <div>{fioError}</div>}

            <TextField
                value={phone}
                id="outlined-name"
                label="Mobile Phone"
                className={cl.inpData}
                onChange={(e) => setPhone(e.target.value)}
            />

            <TextField
                onBlur={event => handleBlur(event)}
                value={email}
                id="outlined-name"
                name='email'
                label="E-mail"
                className={cl.inpData}
                onChange={(e) => handleCheckEmail(e)}
            />
            {(emailDirt && emailError) && <div>{emailError}</div>}
            <TextField
                value={dateOfBirth}
                id="outlined-name"
                label="Date Of Birthday"
                name='date'
                className={cl.inpData}
                onChange={(e) => handleCheckDate(e)}
                onBlur={event => handleBlur(event)}
            />
            {(dateOfBirthDirt && dateOfBirthError) && <div>{dateOfBirthError}</div>}

            <Button disabled={!valid} className={cl.buttonData} onClick={handleSend}>Зарегестрироваться</Button>
        </div>
    );
};

export default RegDataForm;