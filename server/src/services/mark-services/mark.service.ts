import { marks } from '../../../models/marks';
import { ApiError } from '../../errors/api.error';
import { MarkDatabaseService } from './mark.database.service';

export class MarkService {
	static async getMarks(studentIdFK: number, startOfWeek: Date): Promise<marks[]> {
		return await MarkDatabaseService.getMarksForStudent(studentIdFK, startOfWeek);
	}

	static async getMarkById(markId: number): Promise<marks> {
		const mark = await MarkDatabaseService.findMarkById(markId);

		if (!mark)
			throw ApiError.BadRequest('Такой оценки не существует!');

		return mark;
	}
}