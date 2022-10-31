import {NextFunction, Request, Response} from 'express';
import {application} from '../../../config/config';
import {InviteCodeBusinessService} from '../services/inviteCode-service/inviteCode.business.service';

export class InviteCodeController {
	static async inviteCodeRedirect(req: Request, res: Response, next: NextFunction) {
		try {
			const inviteCode: string = req.body;
			await InviteCodeBusinessService.checkInviteCode(inviteCode);

			res.redirect(`https://${application.domain}:${application.port}/hello/registration`);
		} catch (err) {
			next(err);
		}
	}
}