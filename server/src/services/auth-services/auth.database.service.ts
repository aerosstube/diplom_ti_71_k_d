import {Transaction} from 'sequelize';
import {token} from '../../../models/token';
import {SaveTokens} from './auth.business.service';

export class AuthDatabaseService {

	static async createToken(saveToken: SaveTokens, transaction: Transaction): Promise<token> {
		return await token.create({
			user_id: saveToken.userId,
			refresh_token: saveToken.refreshToken
		}, {transaction});
	}



}