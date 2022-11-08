import {schedule} from '../../../../models/schedule';
import {ApiError} from '../../errors/api.error';
import {AudienceService} from '../audience-service/audience.service';
import {AuthUser} from '../auth-services/auth.service';
import {GroupService} from '../group-services/group.service';
import {StudentService} from '../student-services/student.service';
import {TeacherService} from '../teacher-service/teacher.service';
import {TwoHourClassService} from '../twoHourClass-services/twoHourClass.service';
import {WeekdayService} from '../weekday-service/weekday.service';
import {Schedule, ScheduleDay, ScheduleWeek} from './schedule.business.service';
import {ScheduleDatabaseService} from './schedule.database.service';

export class ScheduleService {
	static async getSchedule(schedule: schedule): Promise<Schedule> {
		const audience = await AudienceService.getAudience(schedule.audience_id);
		const teacher = await TeacherService.getTeacher(schedule.teacher_id);
		const group = await GroupService.getGroupById(schedule.group_id);
		const twoHourClass = await TwoHourClassService.getTwoHourClass(schedule.two_our_class_id);
		const weekday = await WeekdayService.getWeekday(schedule.weekday_id);

		return {
			weekday: weekday.name,
			audience: audience.number_audience,
			dateOfClass: schedule.date_of_class,
			groupName: group.name,
			homework: schedule.homework,
			stratTime: schedule.start_time,
			teacher: `${teacher.second_name} ${teacher.first_name} ${(teacher.middle_name) ? teacher.middle_name : ''}`,
			twoOurClassName: twoHourClass.name,
		};
	}

	static async getScheduleDay(scheduleDayDatabse: schedule[]): Promise<ScheduleDay> {
		const scheduleDay: ScheduleDay = {
			schedules: []
		};

		for (const schedule of scheduleDayDatabse) {
			const temp: Schedule = await this.getSchedule(schedule);
			scheduleDay.schedules.push(temp);
		}

		return scheduleDay;
	}

	static async getScheduleWeek(user: AuthUser, date: Date): Promise<ScheduleWeek> {
		const student = await StudentService.getStudentByUserId(user.userId);

		const scheduleWeekDatabase = await ScheduleDatabaseService.getScheduleWeek(date, student.group_id);
		if (scheduleWeekDatabase.length === 0)
			throw ApiError.BadRequest('Расписание на эту неделю не существует!');
		const scheduleWeek: ScheduleWeek = {
			scheduleDays: []
		};
		date.setDate(date.getDate() - 1);
		for (let i = 0; i < 7; i++) {
			date.setDate(date.getDate() + 1);

			let scheduleArr: any[] = [];
			let j = 0;
			console.log(scheduleWeekDatabase[i].date_of_class, ' and date is ', date);
			console.log(scheduleWeekDatabase[i].date_of_class == date);
			console.log(i);
			while (scheduleWeekDatabase[j].date_of_class === date) {
				scheduleArr.push(scheduleWeekDatabase[j]);
				j++;
			}
			scheduleWeek.scheduleDays.push(await this.getScheduleDay(scheduleArr));
		}

		return scheduleWeek;
	}
}

//TODO: СПРОСИ У КОСЕНКО КАКОГО ХУЯ БЛЯТЬ 40 МИНУТ ПРОСТО ПРОЕБАЛ