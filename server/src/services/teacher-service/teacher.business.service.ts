import { Transaction } from 'sequelize';
import { ApiError } from '../../errors/api.error';
import { GroupService } from '../group-services/group.service';
import { StudentService } from '../student-services/student.service';
import { TwoHourClassService } from '../twoHourClass-services/twoHourClass.service';
import { TeacherService } from './teacher.service';

export class TeacherBusinessService {
	static async checkTeacherLesson(userId: number, classId: number): Promise<void> {
		const teacher = await TeacherService.getTeacherByUserId(userId);
		const teacherClasses = await TeacherService.getTeacherClasses(teacher.id);
		const twoHourClass = await TwoHourClassService.getTwoHourClass(classId);

		let isAble = false;

		for (const el of teacherClasses) {
			if (el.teacher_id_fk == teacher.id &&
				el.two_our_class_id_fk == twoHourClass.id) {
				isAble = true;
			}
		}

		if (!isAble)
			throw ApiError.AcessDenied();
	}

	static async getGroupMarks(groupId: number): Promise<unknown> {
		const data = await StudentService.getUserStudent(groupId);

		return {data};
	}

	static async updateStudentMark(markId: number, options: { updatedMark: string }, transaction: Transaction): Promise<void> {
		await TeacherService.updateStudentMark(markId, options.updatedMark, transaction);
	}

	static async deleteStudentMark(markId: number, transaction: Transaction): Promise<void> {
		await TeacherService.deleteStudentMark(markId, transaction);
	}

	static async saveStudentMark(options: { updatedMark: string, studentId: number, classId: number, date: string }, transaction: Transaction): Promise<void> {
		await TeacherService.saveStudentMark(options, transaction);
	}

	static async getAllowedGroups(userId: number) {
		const teacher = await TeacherService.getTeacherByUserId(userId);
		const teacherGroups = await TeacherService.getTeacherGroups(teacher.id);
		const groups = [];

		for (const group of teacherGroups) {
			groups.push(await GroupService.getGroupById(group.group_id));
		}

		return groups;
	}

	static async getAllowedClasses(userId: number) {
		const teacher = await TeacherService.getTeacherByUserId(userId);
		const teacherClasses = await TeacherService.getTeacherClasses(teacher.id);
		const classes = [];

		for (const classElement of teacherClasses) {
			classes.push(await TwoHourClassService.getTwoHourClass(classElement.two_our_class_id_fk));
		}

		return classes;
	}

	static async getClassesForMarks(groupId: number, classId: number) {
		return await TeacherService.getClassesForMarks(groupId, classId);
	}
}