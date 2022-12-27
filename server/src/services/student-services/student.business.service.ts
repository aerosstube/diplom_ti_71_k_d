import { averageScores, StudentService } from './student.service';


export class StudentBusinessService {
	static async getAllMarks(userId: number) {
		const marks = await StudentService.getAllMarks(userId);

		const initValues = {avg: 0, n: 0};
		const avgMarks = marks.reduce(averageScores, initValues).avg;
		return {
			marks,
			avgMarks
		};
	}
}