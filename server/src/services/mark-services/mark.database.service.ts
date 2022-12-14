import { Op, Transaction } from 'sequelize';
import { marks } from '../../../models/marks';
import { two_our_class } from '../../../models/two_our_class';

export class MarkDatabaseService {
	static async getMarksForStudent(studentIdFK: number, date: Date): Promise<marks[]> {
		const secDate: Date = new Date(date);
		secDate.setDate(secDate.getDate() + 6);
		return await marks.findAll({
			where: {
				student_id: studentIdFK,
				date: {
					[Op.between]: [date, secDate]
				}
			}
		});
	}

	static async findMarkById(markId: number): Promise<marks | null> {
		return await marks.findOne({
			where: {
				id: markId
			},

		});
	}

	static async findMarksByStudentId(studentId: number): Promise<marks[]> {
		return await marks.findAll({
			where: {
				student_id: studentId
			},
			attributes: [
				`mark`,
				[`two_our_class_id`, `classId`],
				`date`
			], include: [
				{
					model: two_our_class,
					as: `two_our_class`,
					attributes: [
						`name`
					]
				}
			]
		});
	}

	static async saveMark(options: { mark?: marks, updatedMark: string, studentId?: number, classId?: number, date?: Date }, transaction: Transaction) {
		if (options.mark) {
			options.mark.mark = options.updatedMark;
			return await options.mark.save({transaction});
		}

		return await marks.create({
			mark: options.updatedMark,
			student_id: options.studentId,
			two_our_class_id: options.classId,
			date: options.date
		}, {transaction});
	}
}