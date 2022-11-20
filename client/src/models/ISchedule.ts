export interface ScheduleWeek {
	scheduleDays: ScheduleDay[];
}

export interface ScheduleDay {
	schedules: Schedule[];
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
