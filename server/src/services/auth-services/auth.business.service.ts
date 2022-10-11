import {Transaction} from 'sequelize';
import {JwtTokens} from './auth.service';

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

	}

	static async userLogout(authOptions: AuthOptions, transaction: Transaction): Promise<void> {

	}

	static async userRefreshToken(refreshToken: string): Promise<JwtTokens> {

	}
}