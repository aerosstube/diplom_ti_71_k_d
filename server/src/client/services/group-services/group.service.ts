import {groups} from '../../../../models/groups';
import {ApiError} from '../../errors/api.error';
import {GroupDatabaseService} from './group.database.service';

export class GroupService {
	static async getGroupById(id: number): Promise<groups> {
		const group = await GroupDatabaseService.findGroupById(id);

		if (!group)
			throw ApiError.BadRequest('Такой группы не существует!');

		return group;
	}

	static async getGroupByName(name: string): Promise<groups> {
		const group = await GroupDatabaseService.findGroupByName(name);

		if (!group)
			throw ApiError.BadRequest('Такой группы не существует!');

		return group;
	}
}