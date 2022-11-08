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
exports.InviteCodeController = void 0;
const database_connect_1 = require("../../client/services/database-connect");
const inviteCode_business_service_1 = require("../services/inviteCodes-service/inviteCode.business.service");

class InviteCodeController {
    static createInviteCode(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield database_connect_1.SequelizeConnect.transaction();
            try {
                const {groupName, isTeacher} = req.body;
                const inviteCode = yield inviteCode_business_service_1.InviteCodeBusinessService.createInviteCode(isTeacher, groupName, transaction);
                res.json(inviteCode);
                yield transaction.commit();
            } catch (err) {
                yield transaction.rollback();
                next(err);
            }
        });
    }
}

exports.InviteCodeController = InviteCodeController;
