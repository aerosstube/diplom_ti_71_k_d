import {Router} from 'express';
import {authRouter} from './auth.router';
import {inviteCodeRouter} from './inviteCode.router';
import {scheduleRouter} from './schedule.router';

const routerApp: Router = Router();

routerApp
	.use('/auth', authRouter)
	.use('/inviteCode', inviteCodeRouter)
	.use('/schedule', scheduleRouter);

export {routerApp};
