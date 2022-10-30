import {Transaction} from 'sequelize';
import {InviteCodesService} from './inviteCodes.service';

export class InviteCodeBusinessService {

	static async createInviteCode(groupName: string, transaction: Transaction): Promise<string> {
		return await InviteCodesService.createInviteCode(groupName, transaction);
	}
}