import {Router} from 'express';
import {ScheduleController} from '../controllers/schedule.controller';
import {AuthMiddleware} from '../middlewares/auth-middleware';

const scheduleRouter: Router = Router();

scheduleRouter
	.get('/get_week', AuthMiddleware, ScheduleController.getScheduleWeek);

export {scheduleRouter};