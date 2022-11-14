import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../errors/api.error';
import { InviteCodeBusinessService } from '../services/inviteCode-services/inviteCode.business.service';

export class InviteCodeController {
	static async inviteCodeRedirect(req: Request, res: Response, next: NextFunction) {
		try {
			if (req.cookies.refreshToken)
				next(ApiError.BadRequest('Вы уже авторизованы!'));

			const {inviteCode} = req.body;
			await InviteCodeBusinessService.checkInviteCode(inviteCode);

			res.status(201).send('Код приглашения верный!');
		} catch (err) {
			next(err);
		}
	}
}
