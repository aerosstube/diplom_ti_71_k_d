import { NextFunction, Response } from 'express';
import { ApiError } from '../../../errors/api.error';
import { RequestWithUser } from '../../../middlewares/auth-middleware';
import { TeacherBusinessService } from '../../../services/teacher-service/teacher.business.service';


export class TeacherController {
	static async getAllowedGroups(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {user} = req;
			const groups = await TeacherBusinessService.getAllowedGroups(user.userId);
			console.log(groups);
			res.json({groups});
		} catch (err) {
			next(err);
		}
	}


	static async getGroupMarks(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {query: {className, groupId}} = req;

			if (typeof className !== 'string')
				return next(ApiError.BadRequest('Неверный запрос!'));
			await TeacherBusinessService.checkTeacherLesson(req.user.userId, className);

			if (typeof groupId !== 'string')
				return next(ApiError.BadRequest('Неверный запрос!'));

			res.json(await TeacherBusinessService.getGroupMarks(parseInt(groupId)));
		} catch (err) {
			next(err);
		}
	}

	static async updateStudentMark(req: RequestWithUser, res: Response, next: NextFunction) {

	}
}