import { NextFunction, Response } from 'express';
import { RequestWithUser } from '../middlewares/auth-middleware';
import { MarkDatabaseService } from '../services/mark-services/mark.database.service';
import { ScheduleBusinessService } from '../services/schedule-services/schedule.business.service';

export class ScheduleController {
	static async getScheduleWeek(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {startOfWeek} = req.body;
			const day = await ScheduleBusinessService.getScheduleWeek(req.user, new Date(startOfWeek));
			res.json(day.scheduleDays);
		} catch (err) {
			next(err);
		}
	}

	static async getScheduleWeekWithMarks(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {startOfWeek} = req.body;
			const day = await MarkDatabaseService.getMarks(7, new Date(startOfWeek));
			res.json(day);
		} catch (err) {
			next(err);
		}
	}
}