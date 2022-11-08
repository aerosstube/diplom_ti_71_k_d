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
exports.AuthBusinessService = void 0;
const api_error_1 = require("../../errors/api.error");
const inviteCode_database_service_1 = require("../inviteCode-services/inviteCode.database.service");
const inviteCode_service_1 = require("../inviteCode-services/inviteCode.service");
const user_database_service_1 = require("../user-services/user.database.service");
const user_service_1 = require("../user-services/user.service");
const auth_database_service_1 = require("./auth.database.service");
const auth_service_1 = require("./auth.service");

class AuthBusinessService {
    static userLogin(authOptions, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDatabase = yield auth_service_1.AuthService.checkUser(authOptions.login, authOptions.password);
            const user = {
                fullName: `${userDatabase.second_name} ${userDatabase.first_name} ${userDatabase.middle_name} `,
                login: userDatabase.login,
                userId: userDatabase.id,
                role: userDatabase.role
            };
            const tokens = yield auth_service_1.AuthService.generateToken(user);
            yield auth_service_1.AuthService.saveTokenToDatabase(authOptions, userDatabase, tokens, transaction);
            return Object.assign({}, tokens);
        });
    }

    static userLogout(refreshToken, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken)
                throw api_error_1.ApiError.UnauthorizedError();
            const tokenData = yield auth_service_1.AuthService.deleteToken(refreshToken, transaction);
            yield auth_service_1.AuthService.deleteUserDevice(tokenData, transaction);
        });
    }

    static userRefreshToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield auth_database_service_1.AuthDatabaseService.findToken(refreshToken);
            if (!token)
                throw api_error_1.ApiError.UnauthorizedError();
            const user = auth_service_1.AuthService.validateRefreshToken(refreshToken);
            if (!user)
                api_error_1.ApiError.ValidationError();
            return auth_service_1.AuthService.generateToken({
                fullName: user.fullName,
                login: user.login,
                userId: user.userId,
                role: user.role
            }, refreshToken);
        });
    }

    static userRegistration(registrationOptions, authOptions, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield user_database_service_1.UserDatabaseService.findUserByLogin(registrationOptions.login);
            if (user)
                throw api_error_1.ApiError.BadRequest('Пользователь с таким логином уже существует!');
            user = yield user_service_1.UserService.createUser(registrationOptions, transaction);
            const {inviteCodeOptions} = registrationOptions;
            const inviteCode = yield inviteCode_database_service_1.InviteCodeDatabaseService.findInviteCode(inviteCodeOptions.inviteCode);
            if (!inviteCode)
                throw (api_error_1.ApiError.BadRequest('Неверный код регистрации!'));
            inviteCodeOptions.groupName = inviteCode.group_name;
            inviteCodeOptions.isTeacher = inviteCode.is_teacher;
            yield user_service_1.UserService.userDistribution(registrationOptions.inviteCodeOptions, user.id, transaction);
            const authUser = {
                fullName: `${user.second_name} ${user.first_name} ${user.middle_name} `,
                login: user.login,
                userId: user.id,
                role: user.role
            };
            const tokens = yield auth_service_1.AuthService.generateToken(authUser);
            yield auth_service_1.AuthService.saveTokenToDatabase(authOptions, user, tokens, transaction);
            yield inviteCode_service_1.InviteCodeService.deleteInviteCode(registrationOptions.inviteCodeOptions.inviteCode);
            return Object.assign({}, tokens);
        });
    }
}

exports.AuthBusinessService = AuthBusinessService;
