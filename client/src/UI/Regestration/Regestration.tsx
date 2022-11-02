import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import cl from './Regestration.module.css'
import shp from './image-ep0zmoEb0-transformed.png'

const Regestration = () => {
    const [login, setLogin] = useState('LOGIN')
    const [password, setPassword] = useState('PASSWORD')
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
                type='password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button className={cl.buttonReg}>ВОЙТИ</Button>
        </form>
    );
};

export default Regestration;