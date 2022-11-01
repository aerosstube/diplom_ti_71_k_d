import React from 'react';
import {Button, TextField} from "@mui/material";
import cl from './Regestration.module.css'
import shp from './image-ep0zmoEb0-transformed.png'

const Regestration = () => {
    return (
        <form className={cl.formReg}>
            <img
                src={shp} alt="лого"
                className={cl.imgReg}
            />
            <p className={cl.textReg}>Добро пожаловать на школьный портал!</p>
            <TextField
                id="outlined-name"
                label="Log in"
                className={cl.inpReg}
            />
            <TextField
                id="outlined-name"
                label="Password"
                className={cl.inputReg}
                type='password'
            />
            <Button className={cl.buttonReg}>ВОЙТИ</Button>
        </form>
    );
};

export default Regestration;