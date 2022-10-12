import {compare} from 'bcryptjs';
import {Transaction} from 'sequelize';
import {application} from '../../../config/config';
import {users} from '../../../models/users';
import {ApiError} from '../../errors/api.error';
import {UserService} from '../user-services/user.service';
import * as jwt from 'jsonwebtoken';
import {SaveTokens} from './auth.business.service';
import {AuthDatabaseService} from './auth.database.service';

export interface AuthUser {
	userId: number;
	login: string;
	first_name: string;
	second_name: string;
	middle_name?: string;
}

export interface JwtTokens {
	refreshToken: string;
	accessToken: string;
}


export class AuthService {

	static async checkUser(login: string, password: string, transaction: Transaction): Promise<AuthUser> {
		const user: users = await UserService.findByLogin(login, transaction);
		const isPassword = await compare(password, user.password);

		if (!isPassword)
			throw ApiError.BadRequest('Ошибка авторизации!');

		return {
			userId: user.id,
			login: user.login,
			first_name: user.first_name,
			second_name: user.second_name,
			middle_name: user.middle_name,
		};
	}

	static async generateToken(payload: AuthUser, refreshToken = null): Promise<JwtTokens> {
		return {
			refreshToken: (refreshToken) ? refreshToken : jwt.sign(payload, application.refreshToken, {expiresIn: '30d'}),
			accessToken: jwt.sign(payload, application.accessToken, {expiresIn: '15m'}),
		}
	}

	static async saveToken(saveToken: SaveTokens, transaction: Transaction): Promise<void> {
		await AuthDatabaseService.createToken(saveToken, transaction);
	}
}