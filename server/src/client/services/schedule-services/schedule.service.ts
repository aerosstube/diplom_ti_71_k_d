import {groups} from '../../../../models/groups';
import {schedule} from '../../../../models/schedule';
import {ApiError} from '../../errors/api.error';
import {AudienceService} from '../audience-service/audience.service';
import {GroupService} from '../group-services/group.service';
import {TeacherService} from '../teacher-service/teacher.service';
import {TwoHourClassService} from '../twoHourClass-services/twoHourClass.service';
import {WeekdayService} from '../weekday-service/weekday.service';
import {Schedule, ScheduleDay} from './schedule.business.service';
import {ScheduleDatabaseService} from './schedule.database.service';

export class ScheduleService {
	static async getSchedule(schedule: schedule): Promise<Schedule> {
		const audience = await AudienceService.getAudience(schedule.audience_id);
		const teacher = await TeacherService.getTeacher(schedule.teacher_id);
		const group = await GroupService.getGroupById(schedule.group_id);
		const twoHourClass = await TwoHourClassService.getTwoHourClass(schedule.two_our_class_id);
		const weekday = await WeekdayService.getWeekday(schedule.weekday_id);

		return {
			audience: audience.number_audience,
			dateOfClass: schedule.date_of_class,
			groupName: group.name,
			homework: schedule.homework,
			stratTime: schedule.start_time,
			teacher: `${teacher.second_name} ${teacher.first_name} ${(teacher.middle_name) ? teacher.middle_name : ''}`,
			twoOurClassName: twoHourClass.name,
			weekday: weekday.name
		};
	}

	static async getScheduleDay(day: Date): Promise<ScheduleDay> {
		const groupName: string = '12123';
		const group: groups = await GroupService.getGroupByName(groupName);
		const scheduleDayDatabase = await ScheduleDatabaseService.getScheduleDay(day, group.id);
		if (scheduleDayDatabase.length === 0)
			throw ApiError.BadRequest('Расписание на этот день не существует!');

		const scheduleDay: ScheduleDay = {
			schedules: []
		};

		for (const schedule of scheduleDayDatabase) {
			const temp: Schedule = await this.getSchedule(schedule);
			scheduleDay.schedules.push(temp);
		}

		return scheduleDay;
	}
}
