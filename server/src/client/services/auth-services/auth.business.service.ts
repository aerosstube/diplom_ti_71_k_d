import {Transaction} from 'sequelize';
import {ApiError} from '../../errors/api.error';
import {InviteCodeDatabaseService} from '../inviteCode-services/inviteCode.database.service';
import {InviteCodeService} from '../inviteCode-services/inviteCode.service';
import {UserDatabaseService} from '../user-services/user.database.service';
import {UserService} from '../user-services/user.service';
import {AuthDatabaseService} from './auth.database.service';
import {AuthService, AuthUser, JwtTokens} from './auth.service';

export interface RegistrationUserOptions extends Omit<AuthUser, 'userId'> {
	password: string,
	mobile_phone: string,
	'e-mail': string,
	dateOfBirthday: string,
	inviteCodeOptions: InviteCodeOptions
}

export interface AuthOptions {
	login: string;
	password: string;
	userAgent: string;
	deviceIp: string;
	dateExpired?: Date;
}

export interface SaveTokens {
	dateExpired: Date;
	userId: number;
	refreshToken: string;
	userAgent: string;
	deviceIp: string;
}

export interface TokenOptions {
	userId: number;
	login: string;
	role: string;
	first_name: string;
	second_name: string;
	middle_name?: string;
	iat?: number;
	exp?: number;
}

export interface InviteCodeOptions {
	inviteCode: string;
	groupName: string;
	isTeacher: boolean;
}

export class AuthBusinessService {

	static async userLogin(authOptions: AuthOptions, transaction: Transaction): Promise<JwtTokens> {
		const userDatabase = await AuthService.checkUser(authOptions.login, authOptions.password);
		const user: AuthUser = {
			dateOfBirthday: userDatabase.date_birthday,
			fullName: `${userDatabase.second_name} ${userDatabase.first_name} ${userDatabase.middle_name} `,
			login: userDatabase.login,
			userId: userDatabase.id,
		};
		const tokens: JwtTokens = await AuthService.generateToken(user);

		await AuthService.saveTokenToDatabase(authOptions, userDatabase, tokens, transaction);

		return {
			...tokens
		};
	}

	static async userLogout(refreshToken: string, transaction: Transaction): Promise<void> {
		if (!refreshToken)
			throw ApiError.UnauthorizedError();
		const tokenData = await AuthService.deleteToken(refreshToken, transaction);
		await AuthService.deleteUserDevice(tokenData, transaction);
	}

	static async userRefreshToken(refreshToken: string): Promise<JwtTokens> {
		const user = AuthService.validateRefreshToken(refreshToken);
		if (!user)
			ApiError.ValidationError();

		const token = AuthDatabaseService.findToken(refreshToken);
		if (!token)
			throw ApiError.UnauthorizedError();

		return AuthService.generateToken({
			fullName: `${user.second_name} ${user.first_name} ${user.middle_name} `,
			login: user.login,
			userId: user.userId,
		}, refreshToken);
	}

	static async userRegistration(registrationOptions: RegistrationUserOptions, authOptions: AuthOptions, transaction: Transaction): Promise<JwtTokens> {
		let user = await UserDatabaseService.findUserByLogin(registrationOptions.login);
		if (user)
			throw ApiError.BadRequest('Пользователь с таким логином уже существует!');

		user = await UserService.createUser(registrationOptions, transaction);

		const {inviteCodeOptions} = registrationOptions;
		const inviteCode = await InviteCodeDatabaseService.findInviteCode(inviteCodeOptions.inviteCode);
		if (!inviteCode)
			throw(ApiError.BadRequest('Неверный код регистрации!'));
		inviteCodeOptions.groupName = inviteCode.group_name;
		inviteCodeOptions.isTeacher = inviteCode.is_teacher;

		await UserService.userDistribution(registrationOptions.inviteCodeOptions, user.id, transaction);

		const authUser: AuthUser = {
			dateOfBirthday: user.date_birthday,
			fullName: `${user.second_name} ${user.first_name} ${user.middle_name} `,
			login: user.login,
			userId: user.id
		};

		const tokens: JwtTokens = await AuthService.generateToken(authUser);

		await AuthService.saveTokenToDatabase(authOptions, user, tokens, transaction);
		await InviteCodeService.deleteInviteCode(registrationOptions.inviteCodeOptions.inviteCode);

		return {
			...tokens
		};
	}
}