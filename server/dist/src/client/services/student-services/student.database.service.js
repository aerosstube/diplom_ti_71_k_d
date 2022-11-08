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
exports.StudentDatabaseService = void 0;
const students_1 = require("../../../../models/students");

class StudentDatabaseService {
    static findStudentById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield students_1.students.findOne({
                where: {
                    user_id: userId
                }
            });
        });
    }
}

exports.StudentDatabaseService = StudentDatabaseService;
