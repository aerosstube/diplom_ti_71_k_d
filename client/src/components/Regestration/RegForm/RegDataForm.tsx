import jwt from 'jwt-decode';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {authAPI} from '../../../services/AuthService';
import {UserSlice, UserState} from '../../../store/reducers/UserSlice';
import cl from './RegForm.module.css';
import {Link, useNavigate} from "react-router-dom";
import img from "../../../img/logo2.png";
import {Button, Input} from "antd";
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";
import {checkPhone} from "../../../utils/checkPhone";


const RegDataForm = () => {
    const [userRegestration, {data: tokens, isLoading, error}] = authAPI.useUserRegisterMutation();
    const {addUser} = UserSlice.actions;
    const {inviteCode} = useAppSelector(state => state.userReducer.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
    const [phoneDirt, setPhoneDirt] = useState(false);
    const [phoneError, setPhoneError] = useState('Телефон не может быть пустым');

    const [email, setEmail] = useState('');
    const [emailDirt, setEmailDirt] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым!');

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [dateOfBirthDirt, setDateOfBirthDirt] = useState(false);
    const [dateOfBirthError, setDateOfBirthError] = useState('Дата не может быть пустой!');

    const [valid, setValid] = useState(false);

    const regExpDate = /^(0?[1-9]|[12][0-9]|3[01])\.(0?[1-9]|1[012])\.\d{4}$/;
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
            case 'login': {
                setLoginDirt(true);
                break;
            }
            case 'phone' : {
                setPhoneDirt(true);
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
        if ((checkArr.length < 2) || (checkArr[checkArr.length - 1] === '')) {
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
    const handleCheckLogin = (e) => {
        setLogin(e.target.value);
        if (e.target.value.split('').length > 0) {
            setLoginError('')
        }
    }
    // @ts-ignore
    const handleCheckPhone = (e) => {
        setPhone(checkPhone(e) || '');
        if (e.target.value.split('').length > 0) {
            setPhoneError('')
        }

    }


    useEffect(() => {
        if (emailError || passwordError || fioError || loginError || dateOfBirthError) {
            setValid(false);
        } else setValid(true)
    }, [emailError, passwordError, fioError, loginError, dateOfBirthError])

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
            inviteCode: inviteCode || ''
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
            navigate('/schedule');
        }
        if (error) {
            console.log(error);
        }
    }, [tokens, error]);

    return (
        <form className={cl.regDataForm}>
            <img src={img} alt="" className={cl.regImg}/>
            <p className={cl.regText}>Добро пожаловать в электронный школьный портал!</p>
            <Input
                placeholder="Фамилия Имя Отчество"
                className={cl.regInp}
                value={fio}
                name='fio'
                onChange={(e) => handleCheckFio(e)}
                onBlur={event => handleBlur(event)}
            />
            {(fioDirt && fioError) && <p className={cl.error}>{fioError}</p>}
            <Input
                placeholder="Дата рождения"
                className={cl.regInp}
                value={dateOfBirth}
                name='date'
                onChange={(e) => handleCheckDate(e)}
                onBlur={event => handleBlur(event)}
            />
            {(dateOfBirthDirt && dateOfBirthError) && <p className={cl.error}>{dateOfBirthError}</p>}

            <Input
                placeholder="Электронная почта"
                className={cl.regInp}
                value={email}
                name='email'
                onChange={(e) => handleCheckEmail(e)}
                onBlur={event => handleBlur(event)}
            />
            {(emailDirt && emailError) && <p className={cl.error}>{emailError}</p>}

            <Input
                placeholder="Телефон"
                className={cl.regInp}
                value={phone}
                name='phone'
                onChange={(e) => handleCheckPhone(e)}
                onBlur={event => handleBlur(event)}
            />
            {(phoneDirt) && <p className={cl.error}>{phoneError}</p>}
            <Input
                placeholder="Логин"
                className={cl.regInp}
                value={login}
                name='login'
                onChange={(e) => handleCheckLogin(e)}
                onBlur={event => handleBlur(event)}
            />
            {(loginError && loginDirt) && <p className={cl.error}>{loginError}</p>}

            <Input.Password
                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                placeholder="Пароль"
                className={cl.regInp}
                value={password}
                name='password'
                onChange={(e) => handleCheckPassword(e)}
                data-tel-input
                onBlur={event => handleBlur(event)}
                type='password'
            />
            {(passwordDirt && passwordError) && <p className={cl.error}>{passwordError}</p>}

            <Button disabled={!valid} type="primary" className={cl.regBut} onClick={handleSend}>Регистрация</Button>
            <Link to='/auth' className={cl.regLink}>Уже зарегистрированы?</Link>
        </form>
    );
};

export default RegDataForm;