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
exports.UserService = void 0;
const bcryptjs_1 = require("bcryptjs");
const api_error_1 = require("../../errors/api.error");
const group_database_service_1 = require("../group-services/group.database.service");
const userGroups_service_1 = require("../userGroups-services/userGroups.service");
const user_database_service_1 = require("./user.database.service");

class UserService {
    static findByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_database_service_1.UserDatabaseService.findUserByLogin(login);
            if (!user)
                throw api_error_1.ApiError.BadRequest('Ошибка пользователя!');
            return user;
        });
    }

    static createUser(registrationOptions, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            registrationOptions.password = yield (0, bcryptjs_1.hash)(registrationOptions.password, 4);
            return yield user_database_service_1.UserDatabaseService.createUser(registrationOptions, transaction);
        });
    }

    static userDistribution(inviteCodeOptions, userId, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const group = yield group_database_service_1.GroupDatabaseService.findGroupByName(inviteCodeOptions.groupName);
            if (!group)
                throw api_error_1.ApiError.BadRequest('Неверное имя группы!');
            const userGroupOptions = {
                groupId: group.id,
                userId: userId
            };
            yield userGroups_service_1.UserGroupsService.userGroupDistribution(inviteCodeOptions.isTeacher, userGroupOptions, transaction);
        });
    }

    static getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_database_service_1.UserDatabaseService.findUserById(id);
            if (!user)
                throw api_error_1.ApiError.BadRequest('Неверный пользователь!');
            return user;
        });
    }
}

exports.UserService = UserService;
