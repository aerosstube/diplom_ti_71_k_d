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
exports.AuthDatabaseService = void 0;
const sequelize_1 = require("sequelize");
const token_1 = require("../../../../models/token");
const user_devices_1 = require("../../../../models/user_devices");

class AuthDatabaseService {
    static createToken(saveToken, transaction, user_device_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_1.token.create({
                user_id: saveToken.userId,
                refresh_token: saveToken.refreshToken,
                date_expired: saveToken.dateExpired,
                user_device_id: user_device_id,
            }, {
                transaction,
            });
        });
    }

    static createUserDevice(deviceInfo, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_devices_1.user_devices.create({
                device_ip: deviceInfo.device_ip,
                user_agent: deviceInfo.user_agent
            }, {transaction});
        });
    }

    static findTokenByDeviceId(deviceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_1.token.findOne({
                where: {
                    user_device_id: deviceId,
                }
            });
        });
    }

    static findToken(refreshToken) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_1.token.findOne({
                where: {
                    refresh_token: refreshToken
                }
            });
        });
    }

    static findUserDeviceByUA(deviceInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_devices_1.user_devices.findOne({
                where: {
                    device_ip: deviceInfo.deviceIp,
                    user_agent: deviceInfo.userAgent
                }
            });
        });
    }

    static findExpiredTokens(dateExpired) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield token_1.token.findAll({
                where: {
                    date_expired: {
                        [sequelize_1.Op.lt]: dateExpired
                    }
                }
            });
        });
    }

    static findDeviceById(user_device_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_devices_1.user_devices.findOne({
                where: {
                    id: user_device_id
                }
            });
        });
    }
}

exports.AuthDatabaseService = AuthDatabaseService;
