import {InviteCodeDatabaseService} from './inviteCode.database.service';

export class InviteCodeService {
	static async checkInviteCode(inviteCode: string): Promise<boolean> {
		const inviteCodeDB = await InviteCodeDatabaseService.findInviteCode(inviteCode);

		return !!inviteCodeDB;
	}

	static async deleteInviteCode(inviteCode: string): Promise<number> {
		return await InviteCodeDatabaseService.deleteInviteCode(inviteCode);
	}

} //TODO: Исправить код для удаления в регистрации