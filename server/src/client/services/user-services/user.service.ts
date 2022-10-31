import {hash} from 'bcryptjs';
import {Transaction} from 'sequelize';
import {users} from '../../../../models/users';
import {ApiError} from '../../errors/api.error';
import {RegistrationUserOptions} from '../auth-services/auth.business.service';
import {UserDatabaseService} from './user.database.service';


export class UserService {

	static async findByLogin(login: string): Promise<users> {
		const user: users | null = await UserDatabaseService.findUserByLogin(login);

		if (!user)
			throw ApiError.BadRequest('Ошибка пользователя!');

		return user;
	}

	static async createUser(registrationOptions: RegistrationUserOptions, transaction: Transaction): Promise<users> {
		registrationOptions.password = await hash(registrationOptions.password, 4);
		return await UserDatabaseService.createUser(registrationOptions, transaction);
	}
}
