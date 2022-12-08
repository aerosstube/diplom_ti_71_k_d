import { marks } from '../../../models/marks';
import { MarkDatabaseService } from './mark.database.service';

export class MarkService {
	static async getMarks(studentIdFK: number, startOfWeek: Date): Promise<marks[]> {
		return await MarkDatabaseService.getMarksForStudent(studentIdFK, startOfWeek);
	}
}