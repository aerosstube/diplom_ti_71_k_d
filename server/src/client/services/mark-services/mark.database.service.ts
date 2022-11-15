import { Op } from 'sequelize';
import { marks } from '../../../../models/marks';

export class MarkDatabaseService {
	static async getMarks(studentIdFK: number, date: Date): Promise<marks[]> {
		const secDate: Date = new Date(date);
		secDate.setDate(secDate.getDate() + 6);
		console.log('========================================', date);
		return await marks.findAll({
			where: {
				student_id: studentIdFK,
				date: {
					[Op.between]: [date, secDate]
				}
			}
		});
	}
}