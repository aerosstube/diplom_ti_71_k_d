import { students } from '../../../../models/students';

export class StudentDatabaseService {
	static async findStudentById(userId: number): Promise<null | students> {
		return await students.findOne({
			where: {
				user_id: userId
			}
		});

	}
}