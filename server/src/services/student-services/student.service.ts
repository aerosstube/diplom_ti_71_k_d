import { students } from '../../../models/students';
import { ApiError } from '../../errors/api.error';
import { MarkDatabaseService } from '../mark-services/mark.database.service';
import { StudentDatabaseService } from './student.database.service';

export function averageScores({avg, n}, slangTermInfo) {
	if (!isNaN(parseInt(slangTermInfo.mark)))
		return {
			avg: (parseInt(slangTermInfo.mark) + n * avg) / (n + 1),
			n: n + 1,
		};
	else
		return {
			avg: avg,
			n: n
		};
}

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

	static async getAllMarks(userId: number) {
		const student = await this.getStudentByUserId(userId);
		return await MarkDatabaseService.findMarksByStudentId(student.id);
	}
}