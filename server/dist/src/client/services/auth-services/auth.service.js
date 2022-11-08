"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true, get: function () {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", {enumerable: true, value: v});
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.AuthService = void 0;
const bcryptjs_1 = require("bcryptjs");
const jwt = __importStar(require("jsonwebtoken"));
const config_1 = require("../../../../config/config");
const user_devices_1 = require("../../../../models/user_devices");
const api_error_1 = require("../../errors/api.error");
const user_service_1 = require("../user-services/user.service");
const auth_database_service_1 = require("./auth.database.service");

class AuthService {
    static checkUser(login, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_service_1.UserService.findByLogin(login);
            const isPassword = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!isPassword)
                throw api_error_1.ApiError.BadRequest('Ошибка авторизации!');
            return user;
        });
    }

    static saveToken(saveToken, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deviceInfo = {
                    userAgent: saveToken.userAgent,
                    deviceIp: saveToken.deviceIp
                };
                let deviceData = yield auth_database_service_1.AuthDatabaseService.findUserDeviceByUA(deviceInfo);
                if (!deviceData) {
                    deviceData = yield auth_database_service_1.AuthDatabaseService.createUserDevice({
                        device_ip: saveToken.deviceIp,
                        user_agent: saveToken.userAgent
                    }, transaction);
                }
                let tokenData = yield auth_database_service_1.AuthDatabaseService.findTokenByDeviceId(deviceData.id);
                if (!tokenData)
                    tokenData = yield auth_database_service_1.AuthDatabaseService.createToken(saveToken, transaction, deviceData.id);
                tokenData.refresh_token = saveToken.refreshToken;
                yield tokenData.save();
            } catch (err) {
                console.log(err);
                throw api_error_1.ApiError.BadRequest('Ошибка авторизации!');
            }
        });
    }

    static generateToken(payload, refreshToken = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                refreshToken: (refreshToken) ? refreshToken : jwt.sign(payload, config_1.application.refreshToken, {expiresIn: '30d'}),
                accessToken: jwt.sign(payload, config_1.application.accessToken, {expiresIn: '15m'}),
            };
        });
    }

    static saveTokenToDatabase(authOptions, user, tokens, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const dateExpired = new Date();
            dateExpired.setDate(dateExpired.getDate() + 30);
            const saveToken = {
                userId: user.id,
                refreshToken: tokens.refreshToken,
                userAgent: authOptions.userAgent,
                dateExpired: dateExpired,
                deviceIp: authOptions.deviceIp,
            };
            yield AuthService.saveToken(saveToken, transaction);
        });
    }

    static validateRefreshToken(refreshToken) {
        try {
            const payload = jwt.verify(refreshToken, config_1.application.refreshToken);
            // @ts-ignore
            return Object.assign(payload);
        } catch (e) {
            throw api_error_1.ApiError.UnauthorizedError();
        }
    }

    static validateAccessToken(accessToken) {
        try {
            const tokenPayload = jwt.verify(accessToken, config_1.application.accessToken);
            // @ts-ignore
            return Object.assign(tokenPayload);
        } catch (err) {
            throw api_error_1.ApiError.UnauthorizedError();
        }
    }

    static destroyExpiredTokens() {
        return __awaiter(this, void 0, void 0, function* () {
            const dateExpired = new Date;
            const tokens = yield auth_database_service_1.AuthDatabaseService.findExpiredTokens(dateExpired);
            if (tokens) {
                for (const token of tokens) {
                    const device = yield user_devices_1.user_devices.findOne({
                        where: {
                            id: token.user_device_id
                        }
                    });
                    yield token.destroy();
                    if (device)
                        yield device.destroy();
                }
            }
        });
    }

    static deleteToken(refreshToken, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield auth_database_service_1.AuthDatabaseService.findToken(refreshToken);
            if (!tokenData)
                throw api_error_1.ApiError.UnauthorizedError();
            yield tokenData.destroy({transaction});
            return tokenData;
        });
    }

    static deleteUserDevice(tokenData, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const deviceData = yield auth_database_service_1.AuthDatabaseService.findDeviceById(tokenData.user_device_id);
            if (deviceData === null)
                throw api_error_1.ApiError.UnauthorizedError();
            yield deviceData.destroy({transaction});
        });
    }
}

exports.AuthService = AuthService;
