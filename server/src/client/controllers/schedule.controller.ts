import { NextFunction, Response } from 'express';
import { ApiError } from '../errors/api.error';
import { RequestWithUser } from '../middlewares/auth-middleware';
import { ScheduleBusinessService } from '../services/schedule-services/schedule.business.service';

export class ScheduleController {
	static async getScheduleWeek(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {startOfWeek} = req.query;
			if (typeof startOfWeek !== 'string')
				return next(ApiError.BadRequest('Неверный запрос!'))

			const day = await ScheduleBusinessService.getScheduleWeek(req.user, new Date(startOfWeek));
			res.json(day.scheduleDays);
		} catch (err) {
			next(err);
		}
	}

	static async getScheduleWeekWithMarks(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {startOfWeek} = req.query;
			if (typeof startOfWeek !== 'string')
				return next(ApiError.BadRequest('Неверный запрос!'))

			const day = await ScheduleBusinessService.getScheduleWeekMarks(req.user, new Date(startOfWeek));
			res.json(day.scheduleDays);
		} catch (err) {
			next(err);
		}
	}
}