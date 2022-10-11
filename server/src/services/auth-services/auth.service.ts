import {compare} from 'bcryptjs';
import {Transaction} from 'sequelize';
import {users} from '../../../models/users';
import {ApiError} from '../../errors/api.error';
import {UserService} from '../user-services/user.service';

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
}