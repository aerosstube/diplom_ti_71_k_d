import {Op} from 'sequelize';
import {schedule} from '../../../../models/schedule';

export class ScheduleDatabaseService {
	static async getScheduleByDate(date: Date, groupId: number): Promise<schedule | null> {
		return await schedule.findOne({
			where: {
				date_of_class: date
			}
		});
	}

	static async getScheduleDay(day: Date, groupId: number): Promise<schedule[]> {
		return await schedule.findAll({
			where: {
				date_of_class: {
					[Op.eq]: day
				},
				group_id: {
					[Op.eq]: groupId
				}
			}
		});
	}
}