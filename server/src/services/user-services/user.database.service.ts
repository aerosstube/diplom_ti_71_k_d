import {users} from '../../../models/users';

export class UserDatabaseService {

	static async findUserByLogin(login: string): Promise<users | null> {
		return await users.findOne({
			where: {
				login
			},
		});
	}
}