import React, {useEffect, useState} from 'react';
import cl from './RegForm.module.css';
import {Link, useNavigate} from "react-router-dom";
import {authAPI} from "../../../services/AuthService";
import {UserSlice} from "../../../store/reducers/UserSlice";
import {useAppDispatch} from "../../../hooks";
import img from "../../../img/logo2.png";
import {Button, Input} from "antd";


const RegForm = () => {
    const [sendCode, {error: status}] = authAPI.useUserCodeRegMutation();
    const {addCode} = UserSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [login, setLogin] = useState('');
    const [loginDirt, setLoginDirt] = useState(false);
    const [loginError, setLoginError] = useState('Логин не может быть пустым');
    const [valid, setValid] = useState(false)


    const handleSend = async () => {

        await sendCode(login);


    }
    //@ts-ignore
    const handleCheckLogin = (e) => {
        setLogin(e.target.value);
        if (e.target.value.split('').length > 0) {
            setLoginError('')
        } else {
            setLoginError('Логин не может быть пустым');

        }
    }
    useEffect(() => {
        if (loginError || loginDirt) {
            setValid(false)
        } else {
            setValid(true)
        }
    }, [loginError, loginDirt])


    useEffect(() => {
        // @ts-ignore
        if (status?.originalStatus === 201) {
            dispatch(addCode(login));
            navigate('/regDataForm');
        }

    }, [status]);

    return (
        <form className={cl.mainContainer}>
            <img src={img} alt="" className={cl.regImg}/>
            <p className={cl.regText}>Добро пожаловать в электронный школьный портал!</p>
            <Input
                placeholder="Код регистрации"
                className={cl.regInp}
                onChange={(e) => handleCheckLogin(e)}
                onBlur={() => setLoginDirt(true)}
            />
            {(loginDirt && loginError) && <p className={cl.error}>{loginError}</p>}
            <Button
                type="primary"
                className={cl.regBut}
                onClick={handleSend}
                disabled={!valid}
            >
                Регистрация
            </Button>
            <Link to='/auth' className={cl.regLink}>Уже зарегистрированы?</Link>
        </form>
    );
};

export default RegForm;