import {users} from '../../../models/users';
import {ApiError} from '../../errors/api.error';
import {UserDatabaseService} from './user.database.service';


export class UserService {

	static async findByLogin(login: string): Promise<users> {
		const user: users | null = await UserDatabaseService.findUserByLogin(login);

		if (!user)
			throw ApiError.BadRequest('Ошибка пользователя!');

		return user;
	}
}