import { two_our_class } from '../../../models/init-models';
import { ApiError } from '../../errors/api.error';
import { TwoHourClassDatabaseService } from './twoHourClass.database.service';

export class TwoHourClassService {
	static async getTwoHourClass(id: number): Promise<two_our_class> {
		const twoHourClass = await TwoHourClassDatabaseService.findTwoHourClassById(id);

		if (!twoHourClass)
			throw ApiError.BadRequest('Такой пары не существует!');

		return twoHourClass;
	}

	static async getTwoHourClassByName(name: string): Promise<two_our_class> {
		const twoHourClass = await TwoHourClassDatabaseService.findTwoHourClassByName(name);

		if (!twoHourClass)
			throw ApiError.BadRequest('Такой пары не существует!');

		return twoHourClass;
	}
}