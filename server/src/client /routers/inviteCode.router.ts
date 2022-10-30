import {Router} from 'express';
import {InviteCodeController} from '../controllers/inviteCode.controller';

const inviteCodeRouter: Router = Router();

inviteCodeRouter
	.delete('/delete', InviteCodeController.deleteInviteCode);

export {inviteCodeRouter};