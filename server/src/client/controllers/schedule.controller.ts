import {NextFunction, Response} from 'express';
import {RequestWithUser} from '../middlewares/auth-middleware';
import {ScheduleService} from '../services/schedule-services/schedule.service';

export class ScheduleController {
	static async getScheduleWeek(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {startOfWeek} = req.body;

			const day = await ScheduleService.getScheduleDay(req.user, new Date(startOfWeek));
			res.json(day);
		} catch (err) {
			next(err);
		}
	}
}

//TODO: Давай дальше делай сервис расписания та мнадо разобратся