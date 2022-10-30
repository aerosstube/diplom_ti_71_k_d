import {Router} from 'express';
import {InviteCodeController} from '../controllers/inviteCode.controller';


const inviteCodeRouter: Router = Router();

inviteCodeRouter
	.post('/create', InviteCodeController.createInviteCode);

export {inviteCodeRouter};