import {Router} from 'express';
import {authRouter} from './auth.router';
import {inviteCodeRouter} from './inviteCode.router';

const routerApp: Router = Router();

routerApp
	.use('/auth', authRouter)
	.use('/inviteCode', inviteCodeRouter);

export {routerApp};
