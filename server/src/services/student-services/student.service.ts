import { students } from '../../../models/students';
import { ApiError } from '../../errors/api.error';
import { StudentDatabaseService } from './student.database.service';

export class StudentService {
	static async getStudentByUserId(userId: number): Promise<students> {
		const student = await StudentDatabaseService.findStudentById(userId);
		if (!student)
			throw ApiError.BadRequest('Вы не студент!');

		return student;
	}

	static async getUserStudent(groupId: number): Promise<unknown> {
		const student = await StudentDatabaseService.findStudentUser(groupId);
		if (!student)
			throw ApiError.BadRequest('Вы не студент!');

		return student;
	}
}