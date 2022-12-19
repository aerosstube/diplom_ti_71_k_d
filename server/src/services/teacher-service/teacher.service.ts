import { teacher_has_classes } from '../../../models/teacher_has_classes';
import { teachers } from '../../../models/teachers';
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

	static async getTeacherByUserId(userId: number): Promise<teachers | null> {
		const teacher = await TeacherDatabaseService.findTeacherByUserId(userId);

		if (!teacher)
			throw ApiError.BadRequest('Неверный учитель');

		return teacher;
	}

	static async getTeacherClasses(teacherId: number): Promise<teacher_has_classes[]> {
		const teacherClasses = await TeacherDatabaseService.findTeacherClasses(teacherId);
		if (!teacherClasses.length)
			throw ApiError.BadRequest('Неверный учитель!');

		return teacherClasses;
	}

	static async getTeacherGroups(teacherId: number) {
		const teacherGroups = await TeacherDatabaseService.findTeacherGroups(teacherId);
		if (teacherGroups[0] === undefined)
			throw ApiError.BadRequest('Неверный учитель!');

		return teacherGroups;

	}

}