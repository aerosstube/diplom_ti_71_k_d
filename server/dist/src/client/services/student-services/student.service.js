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
exports.StudentService = void 0;
const api_error_1 = require("../../errors/api.error");
const student_database_service_1 = require("./student.database.service");

class StudentService {
    static getStudentByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = yield student_database_service_1.StudentDatabaseService.findStudentById(userId);
            if (!student)
                throw api_error_1.ApiError.BadRequest('Такого студента не существует!');
            return student;
        });
    }
}

exports.StudentService = StudentService;
