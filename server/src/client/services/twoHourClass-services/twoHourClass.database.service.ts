import {two_our_class} from '../../../../models/two_our_class';

export class TwoHourClassDatabaseService {

	static async findTwoHourClassById(id: number): Promise<two_our_class | null> {
		return await two_our_class.findOne({
			where: {
				id: id
			}
		});
	}
}