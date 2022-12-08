import { Router } from 'express';
import { AuthMiddleware } from '../../../middlewares/auth-middleware';
import { InviteCodeController } from '../controllers/inviteCode.controller';


const inviteCodeRouter: Router = Router();

inviteCodeRouter
	.post('/create', AuthMiddleware, InviteCodeController.createInviteCode);

export { inviteCodeRouter };