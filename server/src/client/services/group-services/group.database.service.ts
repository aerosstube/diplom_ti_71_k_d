import {groups} from '../../../../models/groups';

export class GroupDatabaseService {
	static async findGroup(groupName: string): Promise<groups | null> {
		return await groups.findOne({
			where: {
				name: groupName
			}
		});
	}
}