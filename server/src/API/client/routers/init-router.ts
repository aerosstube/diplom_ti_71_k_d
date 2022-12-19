import { Router } from 'express';
import { authRouter } from './auth.router';
import { inviteCodeRouter } from './inviteCode.router';
import { scheduleRouter } from './schedule.router';
import { teacherRouter } from './teacher.router';

const routerApp: Router = Router();

routerApp
	.use('/auth', authRouter)
	.use('/inviteCode', inviteCodeRouter)
	.use('/schedule', scheduleRouter)
	.use('/teacher', teacherRouter);

export { routerApp };
