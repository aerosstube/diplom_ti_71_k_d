"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
        });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {value: true});
exports.ScheduleService = void 0;
const api_error_1 = require("../../errors/api.error");
const audience_service_1 = require("../audience-service/audience.service");
const group_service_1 = require("../group-services/group.service");
const student_service_1 = require("../student-services/student.service");
const teacher_service_1 = require("../teacher-service/teacher.service");
const twoHourClass_service_1 = require("../twoHourClass-services/twoHourClass.service");
const weekday_service_1 = require("../weekday-service/weekday.service");
const schedule_database_service_1 = require("./schedule.database.service");

class ScheduleService {
    static getSchedule(schedule) {
        return __awaiter(this, void 0, void 0, function* () {
            const audience = yield audience_service_1.AudienceService.getAudience(schedule.audience_id);
            const teacher = yield teacher_service_1.TeacherService.getTeacher(schedule.teacher_id);
            const group = yield group_service_1.GroupService.getGroupById(schedule.group_id);
            const twoHourClass = yield twoHourClass_service_1.TwoHourClassService.getTwoHourClass(schedule.two_our_class_id);
            const weekday = yield weekday_service_1.WeekdayService.getWeekday(schedule.weekday_id);
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
        });
    }

    static getScheduleDay(scheduleDayDatabse) {
        return __awaiter(this, void 0, void 0, function* () {
            const scheduleDay = {
                schedules: []
            };
            for (const schedule of scheduleDayDatabse) {
                const temp = yield this.getSchedule(schedule);
                scheduleDay.schedules.push(temp);
            }
            return scheduleDay;
        });
    }

    static getScheduleWeek(user, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_service_1.StudentService.getStudentByUserId(user.userId);
            const scheduleWeekDatabase = yield schedule_database_service_1.ScheduleDatabaseService.getScheduleWeek(date, student.group_id);
            if (scheduleWeekDatabase.length === 0)
                throw api_error_1.ApiError.BadRequest('Расписание на эту неделю не существует!');
            const scheduleWeek = {
                scheduleDays: []
            };
            for (let i = 0; i < 8; i++) {
                date.setDate(date.getDate() + i);
                let scheduleArr = [];
                let j = 0;
                while (scheduleWeekDatabase[j].date_of_class === date) {
                    scheduleArr.push(scheduleWeekDatabase[j]);
                    j++;
                }
                scheduleWeek.scheduleDays.push(yield this.getScheduleDay(scheduleArr));
            }
            return scheduleWeek;
        });
    }
}

exports.ScheduleService = ScheduleService;
