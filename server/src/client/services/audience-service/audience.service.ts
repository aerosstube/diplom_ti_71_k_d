import { ApiError } from '../../errors/api.error';
import { AudienceDatabaseService } from './audience.database.service';

export class AudienceService {
	static async getAudience(id: number) {
		const audience = await AudienceDatabaseService.findAudienceById(id);
		if (!audience)
			throw ApiError.BadRequest('Неверный номер аудитории!');

		return audience;
	}
}