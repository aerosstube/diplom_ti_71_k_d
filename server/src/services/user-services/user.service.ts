import {Transaction} from 'sequelize';
import {users} from '../../../models/users';
import {ApiError} from '../../errors/api.error';
import {UserDatabaseService} from './user.database.service';


export class UserService {

	static async findByLogin(login: string, transaction: Transaction): Promise<users> {
		const user: users | null = await UserDatabaseService.findUserByLogin(login, transaction);

		if (!user)
			throw ApiError.BadRequest('Ошибка пользователя!');

		return user;
	}
}