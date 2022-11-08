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
exports.AuthController = void 0;
const auth_business_service_1 = require("../services/auth-services/auth.business.service");
const database_connect_1 = require("../services/database-connect");

class AuthController {
    static userLogin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield database_connect_1.SequelizeConnect.transaction();
            try {
                const {body: {user}, useragent, headers, socket} = req;
                const deviceIp = (headers['x-forwarded-for']) ? (headers['x-forwarded-for']).toString() : socket.remoteAddress;
                const authOptions = {
                    deviceIp: deviceIp,
                    userAgent: JSON.stringify(useragent).toString(),
                    password: user.password,
                    login: user.login,
                    role: user.role
                };
                const tokens = yield auth_business_service_1.AuthBusinessService.userLogin(authOptions, transaction);
                res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 3600 * 1000, httpOnly: true});
                res.json({
                    tokens: tokens
                });
                yield transaction.commit();
            } catch (err) {
                yield transaction.rollback();
                next(err);
            }
        });
    }

    static userRegistration(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield database_connect_1.SequelizeConnect.transaction();
            try {
                const {body: {user}, useragent, headers, socket} = req;
                const deviceIp = (headers['x-forwarded-for']) ? (headers['x-forwarded-for']).toString() : socket.remoteAddress;
                const registrationOptions = {
                    dateOfBirthday: user.dateOfBirthday,
                    fullName: `${user.secondName} ${user.firstName} ${user.middleName} `,
                    login: user.login,
                    password: user.password,
                    mobile_phone: user.mobilePhone,
                    'e-mail': user.eMail,
                    role: user.role,
                    inviteCodeOptions: {
                        inviteCode: user.inviteCode,
                        groupName: '',
                        isTeacher: false
                    }
                };
                const authOptions = {
                    deviceIp: deviceIp,
                    login: user.login,
                    password: user.password,
                    role: user.role,
                    userAgent: JSON.stringify(useragent).toString()
                };
                const tokens = yield auth_business_service_1.AuthBusinessService.userRegistration(registrationOptions, authOptions, transaction);
                res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 3600 * 1000, httpOnly: true});
                res.json(tokens);
                yield transaction.commit();
            } catch (err) {
                yield transaction.rollback();
                next(err);
            }
        });
    }

    static userLogout(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield database_connect_1.SequelizeConnect.transaction();
            try {
                const {cookies} = req;
                yield auth_business_service_1.AuthBusinessService.userLogout(cookies.refreshToken, transaction);
                res.clearCookie('refreshToken');
                yield transaction.commit();
                res.json('Все удалено!');
            } catch (err) {
                yield transaction.rollback();
                next(err);
            }
        });
    }

    static userRefresh(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const {cookies} = req;
                const tokens = yield auth_business_service_1.AuthBusinessService.userRefreshToken(cookies.refreshToken);
                res.json({
                    tokens: tokens
                });
            } catch (err) {
                next(err);
            }
        });
    }
}

exports.AuthController = AuthController;
