import {Transaction} from 'sequelize';
import {ApiError} from '../../errors/api.error';
import {UserDatabaseService} from '../user-services/user.database.service';
import {AuthDatabaseService} from './auth.database.service';
import {AuthService, AuthUser, JwtTokens} from './auth.service';

export interface RegistrationUserOptions extends Omit<AuthUser, 'userId'> {
	password: string,
	mobile_phone: string,
	'e-mail': string,
	dateOfBirthday: string,
}

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
		const userDatabase = await AuthService.checkUser(authOptions.login, authOptions.password);
		const user: AuthUser = {
			dateOfBirthday: userDatabase.date_birthday,
			first_name: userDatabase.first_name,
			login: userDatabase.login,
			middle_name: userDatabase.middle_name,
			second_name: userDatabase.second_name,
			userId: userDatabase.id,
		};
		const tokens: JwtTokens = await AuthService.generateToken(user);

		await AuthService.saveTokenToDatabase(authOptions, userDatabase, tokens, transaction);

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

	static async userRegistration(registrationOptions: RegistrationUserOptions, authOptions: AuthOptions, transaction: Transaction): Promise<JwtTokens> {
		let user = await UserDatabaseService.findUserByLogin(registrationOptions.login);
		if (user)
			throw ApiError.BadRequest('Пользователь с таким логином уже существует!');

		user = await AuthService.createUser(registrationOptions, transaction);
		const authUser: AuthUser = {
			dateOfBirthday: user.date_birthday,
			first_name: user.first_name,
			login: user.login,
			middle_name: user.middle_name,
			second_name: user.second_name,
			userId: user.id
		};

		const tokens: JwtTokens = await AuthService.generateToken(authUser);

		await AuthService.saveTokenToDatabase(authOptions, user, tokens, transaction);

		return {
			...tokens
		};

	}
}