import { NextFunction, Request, Response } from 'express';
import { Transaction } from 'sequelize';
import { SequelizeConnect } from '../../../services/database-connect';
import { InviteCodeBusinessService } from '../services/inviteCodes-service/inviteCode.business.service';

export class InviteCodeController {
	static async createInviteCode(req: Request, res: Response, next: NextFunction) {
		const transaction: Transaction = await SequelizeConnect.transaction();
		try {
			const {groupName, isTeacher} = req.body;
			const inviteCode: string = await InviteCodeBusinessService.createInviteCode(isTeacher, groupName, transaction);

			res.json(inviteCode);
			await transaction.commit();
		} catch (err) {
			await transaction.rollback();
			next(err);
		}
	}
}