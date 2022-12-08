import { teachers } from '../../../models/teachers';

export class TeacherDatabaseService {
	static async findTeacherById(id: number) {
		return await teachers.findOne({
			where: {
				id: id
			}
		});
	}
}