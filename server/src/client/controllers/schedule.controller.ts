import {NextFunction, Response} from 'express';
import {RequestWithUser} from '../middlewares/auth-middleware';

export class ScheduleController {
	static async getScheduleWeek(req: RequestWithUser, res: Response, next: NextFunction) {
		try {
			const {startOfWeek} = req.body;

			// const day = await Sch  eduleService.getScheduleDay(new Date(startOfWeek));
			console.log(req.user);
			res.json('works');
		} catch (err) {
			next(err);
		}
	}
}

//TODO: Давай дальше делай сервис расписания та мнадо разобратся