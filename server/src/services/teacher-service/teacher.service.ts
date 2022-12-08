import { users } from '../../../models/users';
import { ApiError } from '../../errors/api.error';
import { UserService } from '../user-services/user.service';
import { TeacherDatabaseService } from './teacher.database.service';

export class TeacherService {
	static async getTeacher(id: number): Promise<users> {
		const teacher = await TeacherDatabaseService.findTeacherById(id);

		if (!teacher)
			throw ApiError.BadRequest('Неверный учитель!');

		return UserService.getUser(teacher.user_id);
	}
}