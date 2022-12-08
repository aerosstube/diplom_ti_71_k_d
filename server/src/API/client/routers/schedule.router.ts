import { Router } from 'express';
import { AuthMiddleware } from '../../../middlewares/auth-middleware';
import { ScheduleController } from '../controllers/schedule.controller';

const scheduleRouter: Router = Router();

scheduleRouter
	.get('/get_week', AuthMiddleware, ScheduleController.getScheduleWeek)
	.get('/get_week_marks', AuthMiddleware, ScheduleController.getScheduleWeekWithMarks);

export { scheduleRouter };