import { Op } from 'sequelize';
import { schedule } from '../../../../models/schedule';

export class ScheduleDatabaseService {
	static async getScheduleByDate(date: Date, groupId: number): Promise<schedule | null> {
		return await schedule.findOne({
			where: {
				date_of_class: date
			}
		});
	}

	static async getScheduleDay(date: Date, groupId: number): Promise<schedule[]> {
		return await schedule.findAll({
			where: {
				date_of_class: {
					[Op.eq]: date
				},
				group_id: {
					[Op.eq]: groupId
				}
			}
		});
	}

	static async getScheduleWeek(date: Date, groupId: number): Promise<schedule[]> {
		const secDate: Date = new Date(date);
		secDate.setDate(secDate.getDate() + 6);

		return await schedule.findAll({
			where: {
				date_of_class: {
					[Op.between]: [date, secDate]
				},
				group_id: {
					[Op.eq]: groupId
				}
			}
		});
	}
}