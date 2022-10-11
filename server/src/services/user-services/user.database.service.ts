import {Transaction} from 'sequelize';
import {users} from '../../../models/users';

export class UserDatabaseService {

	static async findUserByLogin(login: string, transaction: Transaction): Promise<users | null> {
		return await users.findOne({
			where: {
				login
			},
			transaction
		});
	}
}