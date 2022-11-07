import {Router} from 'express';
import {ScheduleController} from '../controllers/schedule.controller';

const scheduleRouter: Router = Router();

scheduleRouter
	.get('/get_week', ScheduleController.getScheduleWeek);

export {scheduleRouter};