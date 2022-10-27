import {Transaction} from 'sequelize';
import {ApiError} from '../../errors/api.error';
import {AuthDatabaseService} from './auth.database.service';
import {AuthService, AuthUser, JwtTokens} from './auth.service';

export interface AuthOptions {
	login: string;
	password: string;
	userAgent?: string;
	deviceIp?: string;
	dateExpired?: Date;
}

export interface SaveTokens {
	dateExpired: Date;
	userId: number;
	refreshToken: string;
	userAgent?: string;
	deviceIp?: string;
}

export interface TokenOptions {
	userId: number;
	login: string;
	first_name: string;
	second_name: string;
	middle_name?: string;
	iat?: number;
	exp?: number;
}

export class AuthBusinessService {

	static async userLogin(authOptions: AuthOptions, transaction: Transaction): Promise<JwtTokens> {
		const user: AuthUser = await AuthService.checkUser(authOptions.login, authOptions.password, transaction);
		const tokens: JwtTokens = await AuthService.generateToken(user);

		await AuthService.saveTokenToDatabase(authOptions, user, tokens, transaction);

		return {
			...tokens
		};
	}

	static async userLogout(refreshToken: string, transaction: Transaction): Promise<void> {
		const tokenData = await AuthService.deleteToken(refreshToken, transaction);
		await AuthService.deleteUserDevice(tokenData, transaction);
	}

	static async userRefreshToken(refreshToken: string): Promise<JwtTokens> {
		const user = AuthService.validateRefreshToken(refreshToken);
		const token = AuthDatabaseService.findToken(refreshToken);

		if (!token)
			throw ApiError.UnauthorizedError();

		return AuthService.generateToken({
			first_name: user.first_name,
			login: user.login,
			second_name: user.second_name,
			userId: user.userId,
			middle_name: user.middle_name
		}, refreshToken);
	}

	static async userRegistration(authOptions: AuthOptions, authUser: AuthUser, transaction: Transaction): Promise<JwtTokens> {
		const user: AuthUser = await AuthService.createUser(authOptions, authUser, transaction);
		const tokens: JwtTokens = await AuthService.generateToken(authUser);

		await AuthService.saveTokenToDatabase(authOptions, user, tokens, transaction);


		return {
			...tokens
		}

	}
}