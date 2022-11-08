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
exports.UserDatabaseService = void 0;
const users_1 = require("../../../../models/users");

class UserDatabaseService {
    static findUserByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_1.users.findOne({
                where: {
                    login
                },
            });
        });
    }

    static findUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_1.users.findOne({
                where: {
                    id: id
                }
            });
        });
    }

    static createUser(registrationOptions, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield users_1.users.create({
                login: registrationOptions.login,
                password: registrationOptions.password,
                first_name: registrationOptions.fullName.split(' ')[1],
                second_name: registrationOptions.fullName.split(' ')[0],
                middle_name: registrationOptions.fullName.split(' ')[2],
                date_birthday: registrationOptions.dateOfBirthday,
                'e-mail': registrationOptions['e-mail'],
                mobile_phone: registrationOptions.mobile_phone,
                role: registrationOptions.role
            }, {transaction});
        });
    }
}

exports.UserDatabaseService = UserDatabaseService;
