import {Transaction} from 'sequelize';
import {users} from '../../../models/init-models';

export class AuthDatabaseService {

	static async getAllUsers(transaction: Transaction): Promise<users[]> {
		return await users.findAll({transaction});
	}
}