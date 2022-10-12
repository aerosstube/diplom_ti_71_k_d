import {Transaction} from 'sequelize';
import {AuthService, AuthUser, JwtTokens} from './auth.service';

export interface AuthOptions {
	login: string;
	password: string;
}

export interface SaveTokens {
	userId: number;
	refreshToken: string;
}


export class AuthBusinessService {

	static async userLogin(authOptions: AuthOptions, transaction: Transaction): Promise<JwtTokens> {
		const user: AuthUser = await AuthService.checkUser(authOptions.login, authOptions.password, transaction);
		const tokens: JwtTokens = await AuthService.generateToken(user);

		const saveToken: SaveTokens = {
			userId: user.userId,
			refreshToken: tokens.refreshToken,
		}

		await AuthService.saveToken(saveToken, transaction);

		return {
			...tokens
		};
	}

	static async userLogout(authOptions: AuthOptions, transaction: Transaction): Promise<void> {

	}

	static async userRefreshToken(refreshToken: string): Promise<JwtTokens> {

	}
}