export interface ScheduleDay {
	schedules: Schedule[];
}

export interface ScheduleWeek {
	scheduleDays: ScheduleDay[];
}

export interface Schedule {
	stratTime: Date;
	groupName: string;
	weekday: string;
	audience: number;
	twoOurClassName: string;
	teacher: string;
	dateOfClass: Date;
	homework?: string;
}

export class ScheduleBusinessService {
	static async getScheduleWeek(monday: Date): Promise<void> {

	}
}