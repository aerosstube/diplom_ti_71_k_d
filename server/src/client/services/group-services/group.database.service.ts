import { groups } from '../../../../models/groups';

export class GroupDatabaseService {
	static async findGroupByName(groupName: string): Promise<groups | null> {
		return await groups.findOne({
			where: {
				name: groupName
			}
		});
	}

	static async findGroupById(id: number): Promise<groups | null> {
		return await groups.findOne({
			where: {
				id: id
			}
		});
	}
}