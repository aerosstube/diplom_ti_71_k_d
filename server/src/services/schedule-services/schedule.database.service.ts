import { Op } from 'sequelize';
import { schedule } from '../../../models/schedule';

export class ScheduleDatabaseService {
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

			},
			order: [
				// @ts-ignore
				['start_time']
			]
		});
	}

	static async getDates(groupId: number, classId: number): Promise<schedule[]> {
		return await schedule.findAll({
			where: {
				group_id: groupId,
				two_our_class_id: classId
			},
			attributes: [
				`date_of_class`
			],
			order: [
				[`date_of_class`, `ASC`]
			]
		});
	}

}