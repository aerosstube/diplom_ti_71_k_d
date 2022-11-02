import {Transaction} from 'sequelize';
import {students} from '../../../../models/students';
import {teachers} from '../../../../models/teachers';

export interface UserGroupOptions {
	groupId: number;
	userId: number;
}

export class UserGroupsDatabaseService {
	static async addTeacher(userGroupOptions: UserGroupOptions, transaction: Transaction): Promise<teachers> {
		return await teachers.create({
			user_id: userGroupOptions.userId,
			group_id: userGroupOptions.groupId,
		}, {transaction});
	}

	static async addStudent(userGroupOptions: UserGroupOptions, transaction: Transaction): Promise<students> {
		return await students.create({
			user_id: userGroupOptions.userId,
			group_id: userGroupOptions.groupId,
		}, {transaction});
	}
}