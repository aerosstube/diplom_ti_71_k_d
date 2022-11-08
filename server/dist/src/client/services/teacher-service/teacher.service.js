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
exports.TeacherService = void 0;
const api_error_1 = require("../../errors/api.error");
const user_service_1 = require("../user-services/user.service");
const teacher_database_service_1 = require("./teacher.database.service");

class TeacherService {
    static getTeacher(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const teacher = yield teacher_database_service_1.TeacherDatabaseService.findTeacherById(id);
            if (!teacher)
                throw api_error_1.ApiError.BadRequest('Неверный учитель!');
            return user_service_1.UserService.getUser(teacher.user_id);
        });
    }
}

exports.TeacherService = TeacherService;
