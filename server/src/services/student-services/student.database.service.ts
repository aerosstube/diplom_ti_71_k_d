import { marks } from '../../../models/marks';
import { students } from '../../../models/students';
import { users } from '../../../models/users';

export class StudentDatabaseService {
	static async findStudentById(userId: number): Promise<null | students> {
		return await students.findOne({
			where: {
				user_id: userId
			}
		});

	}

	static async findStudentUser(groupId: number): Promise<unknown> {
		return await students.findAll({
			where: {
				group_id: groupId
			},
			include: [{
				model: marks,
				as: `marks`,
				attributes: [
					`id`,
					`mark`,
					`two_our_class_id`,
					`date`
				]
			}, {
				model: users,
				as: `user`,
				attributes: [
					`first_name`,
					`second_name`,
					`middle_name`
				],
			}],
			//@ts-ignore
			order: [
				[`user`, `second_name`, `ASC`]
			]

		});
	}
}