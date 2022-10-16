import {Transaction} from 'sequelize';
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


export class AuthBusinessService {

	static async userLogin(authOptions: AuthOptions, transaction: Transaction): Promise<JwtTokens> {
		const user: AuthUser = await AuthService.checkUser(authOptions.login, authOptions.password, transaction);
		const tokens: JwtTokens = await AuthService.generateToken(user);

		const dateExpired: Date = new Date();
		dateExpired.setSeconds(dateExpired.getSeconds() + 10);

		const saveToken: SaveTokens = {
			userId: user.userId,
			refreshToken: tokens.refreshToken,
			userAgent: authOptions.userAgent,
			dateExpired: dateExpired,
			deviceIp: authOptions.deviceIp,
		};

		await AuthService.saveToken(saveToken, transaction);

		return {
			...tokens
		};
	}

	static async userLogout(authOptions: AuthOptions, transaction: Transaction): Promise<void> {

	}

	// static async userRefreshToken(refreshToken: string): Promise<JwtTokens> {
	//
	// }
}