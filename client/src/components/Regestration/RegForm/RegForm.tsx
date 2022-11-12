import React, {useState} from 'react';
import {Button, TextField} from '@mui/material';
import cl from '../AuthForm/AuthForm.module.css';
import shp from '../AuthForm/image-ep0zmoEb0-transformed.png';

const RegForm = () => {
    //const [loginUser, {data: tokens, isLoading, error}] = authAPI.useUserLoginMutation();
    // const {addUser} = UserSlice.actions;
    // const dispatch = useAppDispatch();
     const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    // const handleSend = async () => {
    //     const user = {
    //         login,
    //         password
    //     };
    //     await loginUser(user);
    // };
    //
    // useEffect(() => {
    //     if (tokens) {
    //         const response: UserState = {
    //             user: jwt(tokens.tokens.accessToken),
    //             tokens,
    //             isLogged: true
    //         };
    //         dispatch(addUser(response));
    //     }
    //     if (error) {
    //         console.log(error);
    //     }
    // }, [tokens, error]);

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
            <Button className={cl.buttonReg}>ВОЙТИ</Button>

        </form>
    );
};

export default RegForm;