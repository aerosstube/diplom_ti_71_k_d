import {Router} from 'express';
import {inviteCodeRouter} from './inviteCodeRouter';

const adminRouterApp: Router = Router();

adminRouterApp
	.use('/inviteCode', inviteCodeRouter);

export {adminRouterApp};
