import { invite_codes } from '../../../../models/init-models';

export class InviteCodeDatabaseService {
	static async findInviteCode(inviteCode: string) {
		return await invite_codes.findOne({
			where: {
				invite_code: inviteCode
			}
		});
	}

	static async deleteInviteCode(inviteCode: string): Promise<number> {
		return await invite_codes.destroy({
			where: {
				invite_code: inviteCode
			}
		});
	}
}