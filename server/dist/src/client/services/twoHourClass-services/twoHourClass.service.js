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
exports.TwoHourClassService = void 0;
const api_error_1 = require("../../errors/api.error");
const twoHourClass_database_service_1 = require("./twoHourClass.database.service");

class TwoHourClassService {
    static getTwoHourClass(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const twoHourClass = yield twoHourClass_database_service_1.TwoHourClassDatabaseService.findTwoHourClassById(id);
            if (!twoHourClass)
                throw api_error_1.ApiError.BadRequest('Такой пары не существует!');
            return twoHourClass;
        });
    }
}

exports.TwoHourClassService = TwoHourClassService;
