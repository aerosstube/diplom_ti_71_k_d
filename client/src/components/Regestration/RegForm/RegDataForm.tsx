import { Button, TextField } from '@mui/material';
import jwt from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../hooks/hook';
import { authAPI } from '../../../services/AuthService';
import { UserSlice, UserState } from '../../../store/reducers/UserSlice';
import cl from './RegDataForm.module.css';

const RegDataForm = () => {
	const [userRegestration, {data: tokens, isLoading, error}] = authAPI.useUserRegestrationMutation();
	const {addUser} = UserSlice.actions;
	const dispatch = useAppDispatch();
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [fio, setFio] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [dateOfBirth, setDayOfBirth] = useState('');
	console.log(fio.split(' '));
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
				className={cl.inpData}
				onChange={(e) => setLogin(e.target.value)}
			/>
			<TextField
				value={password}
				type="password"
				id="outlined-name"
				label="Password"
				className={cl.inpData}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<TextField
				value={fio}
				id="outlined-name"
				label="FIO"
				className={cl.inpData}
				onChange={(e) => setFio(e.target.value)}
			/>
			<TextField
				value={phone}
				id="outlined-name"
				label="Mobile Phone"
				className={cl.inpData}
				onChange={(e) => setPhone(e.target.value)}
			/>
			<TextField
				value={email}
				id="outlined-name"
				label="E-mail"
				className={cl.inpData}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				value={dateOfBirth}
				id="outlined-name"
				label="Date Of Birthday"
				className={cl.inpData}
				onChange={(e) => setDayOfBirth(e.target.value)}
			/>
			<Button className={cl.buttonData} onClick={handleSend}>Зарегестрироваться</Button>
		</div>
	);
};

export default RegDataForm;