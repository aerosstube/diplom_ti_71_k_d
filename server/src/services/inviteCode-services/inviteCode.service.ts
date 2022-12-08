import { ApiError } from '../../errors/api.error';
import { RegistrationUserOptions } from '../auth-services/auth.business.service';
import { InviteCodeDatabaseService } from './inviteCode.database.service';

export class InviteCodeService {
	static async checkInviteCode(inviteCode: string): Promise<boolean> {
		const inviteCodeDB = await InviteCodeDatabaseService.findInviteCode(inviteCode);

		return !!inviteCodeDB;
	}

	static async deleteInviteCode(inviteCode: string): Promise<number> {
		return await InviteCodeDatabaseService.deleteInviteCode(inviteCode);
	}


	static async setInviteCodeOptions(registrationOptions: RegistrationUserOptions): Promise<void> {
		const {inviteCodeOptions} = registrationOptions;

		const inviteCode = await InviteCodeDatabaseService.findInviteCode(inviteCodeOptions.inviteCode);
		if (!inviteCode)
			throw(ApiError.BadRequest('Неверный код регистрации!'));

		inviteCodeOptions.groupName = inviteCode.group_name;
		inviteCodeOptions.isTeacher = inviteCode.is_teacher;
	}
} 