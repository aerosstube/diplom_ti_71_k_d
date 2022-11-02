import {Transaction} from 'sequelize';
import {invite_codes} from '../../../../models/init-models';

export interface InviteCodeOptions {
	inviteCode: string;
	groupName: string;
	isTeacher: boolean;
}

export class InviteCodesDatabaseService {

	static async createInviteCode(inviteCodeOptions: InviteCodeOptions, transaction: Transaction): Promise<invite_codes> {
		return await invite_codes.create({
			invite_code: inviteCodeOptions.inviteCode,
			group_name: inviteCodeOptions.groupName,
			is_teacher: inviteCodeOptions.isTeacher,
		});
	}


}