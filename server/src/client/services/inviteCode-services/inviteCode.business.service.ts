import { ApiError } from '../../errors/api.error';
import { InviteCodeService } from './inviteCode.service';

export class InviteCodeBusinessService {
	static async checkInviteCode(inviteCode: string): Promise<void> {
		const isInviteCodeValid = await InviteCodeService.checkInviteCode(inviteCode);

		if (!isInviteCodeValid)
			throw ApiError.BadRequest('Код приглашения невалидный!');
	}

}
