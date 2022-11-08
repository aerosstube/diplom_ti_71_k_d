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
exports.WeekdayDatabaseService = void 0;
const weekdays_1 = require("../../../../models/weekdays");

class WeekdayDatabaseService {
    static getWeekDayById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield weekdays_1.weekdays.findOne({
                where: {
                    id: id
                }
            });
        });
    }
}

exports.WeekdayDatabaseService = WeekdayDatabaseService;
