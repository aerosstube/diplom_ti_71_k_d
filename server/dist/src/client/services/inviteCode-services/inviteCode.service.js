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
exports.InviteCodeService = void 0;
const inviteCode_database_service_1 = require("./inviteCode.database.service");

class InviteCodeService {
    static checkInviteCode(inviteCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const inviteCodeDB = yield inviteCode_database_service_1.InviteCodeDatabaseService.findInviteCode(inviteCode);
            return !!inviteCodeDB;
        });
    }

    static deleteInviteCode(inviteCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield inviteCode_database_service_1.InviteCodeDatabaseService.deleteInviteCode(inviteCode);
        });
    }
}

exports.InviteCodeService = InviteCodeService;
