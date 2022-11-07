import {hash} from 'bcryptjs';
import {Transaction} from 'sequelize';
import {users} from '../../../../models/users';
import {ApiError} from '../../errors/api.error';
import {InviteCodeOptions, RegistrationUserOptions} from '../auth-services/auth.business.service';
import {GroupDatabaseService} from '../group-services/group.database.service';
import {UserGroupOptions} from '../userGroups-services/userGroups.database.service';
import {UserGroupsService} from '../userGroups-services/userGroups.service';
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

	static async userDistribution(inviteCodeOptions: InviteCodeOptions, userId: number, transaction: Transaction): Promise<void> {
		const group = await GroupDatabaseService.findGroupByName(inviteCodeOptions.groupName);
		if (!group)
			throw ApiError.BadRequest('Неверное имя группы!');

		const userGroupOptions: UserGroupOptions = {
			groupId: group.id,
			userId: userId
		};

		await UserGroupsService.userGroupDistribution(inviteCodeOptions.isTeacher, userGroupOptions, transaction);
	}

	static async getUser(id: number): Promise<users> {
		const user = await UserDatabaseService.findUserById(id);
		if (!user)
			throw ApiError.BadRequest('Неверный пользователь!');

		return user;
	}
}
