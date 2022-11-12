import { Router } from 'express';
import { InviteCodeController } from '../controllers/inviteCode.controller';

const inviteCodeRouter: Router = Router();

inviteCodeRouter
	.get('/check', InviteCodeController.inviteCodeRedirect);

export { inviteCodeRouter };