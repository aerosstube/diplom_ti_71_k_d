import { Router } from 'express';
import { authRouter } from './auth.router';
import { inviteCodeRouter } from './inviteCode.router';
import { scheduleRouter } from './schedule.router';
import { studentRouter } from './student.router';
import { teacherRouter } from './teacher.router';

const routerApp: Router = Router();

routerApp
	.use('/auth', authRouter)
	.use('/inviteCode', inviteCodeRouter)
	.use('/schedule', scheduleRouter)
	.use('/teacher', teacherRouter)
	.use('/student', studentRouter);

export { routerApp };
