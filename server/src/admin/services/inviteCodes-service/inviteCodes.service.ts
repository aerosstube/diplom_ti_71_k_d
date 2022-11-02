import {Transaction} from 'sequelize';
import {v4} from 'uuid';
import {InviteCodeOptions, InviteCodesDatabaseService} from './inviteCodes.database.service';

export class InviteCodesService {
	static async createInviteCode(isTeacher: boolean, groupName: string, transaction: Transaction): Promise<string> {
		const uuid = v4().split('-');

		const inviteCodeOptions: InviteCodeOptions = {
			groupName: groupName,
			inviteCode: `${uuid[1]}-${uuid[2]}`,
			isTeacher: isTeacher
		};

		await InviteCodesDatabaseService.createInviteCode(inviteCodeOptions, transaction);

		return inviteCodeOptions.inviteCode;
	}
}