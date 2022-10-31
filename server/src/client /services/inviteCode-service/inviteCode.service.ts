import {ApiError} from '../../errors/api.error';
import {InveiteCodeDatabaseService} from './inveiteCode.database.service';

export class InviteCodeService {
	static async checkInviteCode(inviteCode: string): Promise<boolean> {
		const inviteCodeDB = await InveiteCodeDatabaseService.findInviteCode(inviteCode);

		return !!inviteCode;
	}
}