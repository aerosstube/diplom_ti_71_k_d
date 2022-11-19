import React, {useEffect, useState} from 'react';
import {Button, TextField} from '@mui/material';
import cl from '../AuthForm/AuthForm.module.css';
import shp from '../AuthForm/image-ep0zmoEb0-transformed.png';
import {useNavigate} from "react-router-dom";
import {authAPI} from "../../../services/AuthService";
import {UserSlice} from "../../../store/reducers/UserSlice";
import {useAppDispatch} from "../../../hooks";


const RegForm = () => {
    const [sendCode, {error: status}] = authAPI.useUserCodeRegMutation();
    const {addCode} = UserSlice.actions;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState('');


    const handleSend = async () => {

        await sendCode(login);


    }


    useEffect(() => {
        // @ts-ignore
        if (status?.originalStatus === 201) {
            dispatch(addCode(login));
            navigate('/regDataForm');
        }

    }, [status]);

    return (
        <form className={cl.formReg}>
            <img
                src={shp} alt="лого"
                className={cl.imgReg}
            />
            <p className={cl.textReg}>Добро пожаловать! Введите код регистрации</p>
            <TextField
                value={login}
                id="outlined-name"
                label="Enter code"
                className={cl.inpReg}
                onChange={(e) => setLogin(e.target.value)}
            />

            {
                // @ts-ignore
                status && <div>{status?.message}</div>
            }
            <Button
                className={cl.buttonReg}
                onClick={handleSend}
            >
                ВОЙТИ
            </Button>

        </form>
    );
};

export default RegForm;