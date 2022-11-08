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
exports.InviteCodesService = void 0;
const uuid_1 = require("uuid");
const inviteCodes_database_service_1 = require("./inviteCodes.database.service");

class InviteCodesService {
    static createInviteCode(isTeacher, groupName, transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const uuid = (0, uuid_1.v4)().split('-');
            const inviteCodeOptions = {
                groupName: groupName,
                inviteCode: `${uuid[1]}-${uuid[2]}`,
                isTeacher: isTeacher
            };
            yield inviteCodes_database_service_1.InviteCodesDatabaseService.createInviteCode(inviteCodeOptions, transaction);
            return inviteCodeOptions.inviteCode;
        });
    }
}

exports.InviteCodesService = InviteCodesService;
