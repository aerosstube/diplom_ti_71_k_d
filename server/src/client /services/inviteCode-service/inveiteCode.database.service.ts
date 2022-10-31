import {invite_codes} from '../../../../models/init-models';

export class InveiteCodeDatabaseService {
	static async findInviteCode(inviteCode: string) {
		return await invite_codes.findOne({
			where: {
				invite_code: inviteCode
			}
		})
	}
}