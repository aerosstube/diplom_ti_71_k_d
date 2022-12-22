import { NextFunction, Response } from 'express';
import { Transaction } from 'sequelize';
import { ApiError } from '../../../errors/api.error';
import { RequestWithUser } from '../../../middlewares/auth-middleware';
import { SequelizeConnect } from '../../../services/database-connect';
import { TeacherBusinessService } from '../../../services/teacher-service/teacher.business.service';


export class TeacherController {
	static async getGroupMarks(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {query: {classId, groupId}} = req;

			if (typeof classId !== 'string')
				return next(ApiError.BadRequest('Неверный запрос!'));

			await TeacherBusinessService.checkTeacherLesson(req.user.userId, parseInt(classId));

			if (typeof groupId !== 'string')
				return next(ApiError.BadRequest('Неверный запрос!'));

			const student_marks = await TeacherBusinessService.getGroupMarks(parseInt(groupId));
			const classes = await TeacherBusinessService.getClassesForMarks(parseInt(groupId), parseInt(classId));

			res.json({
				student_marks,
				classes
			});
		} catch (err) {
			next(err);
		}
	}

	static async updateStudentMark(req: RequestWithUser, res: Response, next: NextFunction) {
		const transaction: Transaction = await SequelizeConnect.transaction();
		try {
			const {body: {markId, updatedMark}, user: {isTeacher}} = req;

			await TeacherBusinessService.updateStudentMark(markId, {isTeacher, updatedMark}, transaction);
			res.json('Оценка изменилась!');
			await transaction.commit();
		} catch (err) {
			await transaction.rollback();
			next(err);
		}
	}

	static async getAllowedGroups(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {user} = req;
			const groups = await TeacherBusinessService.getAllowedGroups(user.userId);

			res.json({groups});
		} catch (err) {
			next(err);
		}
	}

	static async getAllowedClasses(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {user} = req;
			const classes = await TeacherBusinessService.getAllowedClasses(user.userId);

			res.json({classes});
		} catch (err) {
			next(err);
		}
	}
}