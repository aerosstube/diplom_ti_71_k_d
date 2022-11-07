import {NextFunction, Request, Response} from 'express';
import {ScheduleService} from '../services/schedule-services/schedule.service';

export class ScheduleController {
	static async getScheduleWeek(req: Request, res: Response, next: NextFunction) {
		try {
			const {startOfWeek} = req.body;
			const day = await ScheduleService.getScheduleDay(new Date(startOfWeek),);
			console.log(day);
			res.json(day);
		} catch (err) {
			next(err);
		}
	}
}

//TODO: Давай дальше делай сервис расписания та мнадо разобратся