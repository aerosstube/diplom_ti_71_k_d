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
exports.ScheduleDatabaseService = void 0;
const sequelize_1 = require("sequelize");
const schedule_1 = require("../../../../models/schedule");

class ScheduleDatabaseService {
    static getScheduleByDate(date, groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield schedule_1.schedule.findOne({
                where: {
                    date_of_class: date
                }
            });
        });
    }

    static getScheduleDay(date, groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield schedule_1.schedule.findAll({
                where: {
                    date_of_class: {
                        [sequelize_1.Op.eq]: date
                    },
                    group_id: {
                        [sequelize_1.Op.eq]: groupId
                    }
                }
            });
        });
    }

    static getScheduleWeek(date, groupId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield schedule_1.schedule.findAll({
                where: {
                    date_of_class: {
                        [sequelize_1.Op.between]: [date, date.setDate(date.getDate() + 6)]
                    },
                    group_id: {
                        [sequelize_1.Op.eq]: groupId
                    }
                }
            });
        });
    }
}

exports.ScheduleDatabaseService = ScheduleDatabaseService;
