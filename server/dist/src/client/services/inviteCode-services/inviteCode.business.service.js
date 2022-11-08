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
exports.InviteCodeBusinessService = void 0;
const api_error_1 = require("../../errors/api.error");
const inviteCode_service_1 = require("./inviteCode.service");

class InviteCodeBusinessService {
    static checkInviteCode(inviteCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const isInviteCodeValid = yield inviteCode_service_1.InviteCodeService.checkInviteCode(inviteCode);
            if (!isInviteCodeValid)
                throw api_error_1.ApiError.BadRequest('Код приглашения невалидный!');
        });
    }
}

exports.InviteCodeBusinessService = InviteCodeBusinessService;
