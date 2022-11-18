import { AuthUser } from '../auth-services/auth.service';
import { StudentService } from '../student-services/student.service';
import { ScheduleService } from './schedule.service';

export interface ScheduleDay {
	schedules: Schedule[];
}

export interface ScheduleWeek {
	scheduleDays: ScheduleDay[];
}

export interface Schedule {
	startTime: Date;
	groupName: string;
	weekday: string;
	audience: number;
	twoOurClassName: string;
	teacher: string;
	dateOfClass: Date;
	homework?: string;
	mark?: string;
}

export interface ScheduleUserInfo {
	studentIdFK: number;
	groupId: number;
}

export class ScheduleBusinessService {
	static async getScheduleWeek(user: AuthUser, startOfWeek: Date): Promise<ScheduleWeek> {
		const student = await StudentService.getStudentByUserId(user.userId);
		const scheduleUserInfo: ScheduleUserInfo = {
			studentIdFK: student.id,
			groupId: student.group_id
		};

		return await ScheduleService.getScheduleWeek(startOfWeek, scheduleUserInfo);
	}


	static async getScheduleWeekMarks(user: AuthUser, startOfWeek: Date): Promise<ScheduleWeek> {
		const student = await StudentService.getStudentByUserId(user.userId);
		const scheduleUserInfo: ScheduleUserInfo = {
			studentIdFK: student.id,
			groupId: student.group_id
		};

		return await ScheduleService.getScheduleMarks(startOfWeek, scheduleUserInfo);
	}
}