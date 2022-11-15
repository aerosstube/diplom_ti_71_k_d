import { marks } from '../../../../models/marks';
import { ApiError } from '../../errors/api.error';
import { MarkDatabaseService } from './mark.database.service';

export class MarkService {
	static async getMarks(studentIdFK: number, startOfWeek: Date): Promise<marks[]> {
		const marks = await MarkDatabaseService.getMarks(studentIdFK, startOfWeek);

		if (!marks.length)
			throw ApiError.BadRequest('Неверный запрос!');

		return marks;
	}

	// static async getCurrentMark(mark: marks): Promise<marks> {
	// 	for
	// }
}