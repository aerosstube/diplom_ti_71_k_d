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
const config_1 = require("../../../config/config");
const api_error_1 = require("../errors/api.error");
const inviteCode_business_service_1 = require("../services/inviteCode-services/inviteCode.business.service");

class InviteCodeController {
    static inviteCodeRedirect(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.cookies.refreshToken)
                    next(api_error_1.ApiError.BadRequest('Вы уже авторизованы!'));
                const {inviteCode} = req.body;
                yield inviteCode_business_service_1.InviteCodeBusinessService.checkInviteCode(inviteCode);
                res.redirect(`https://${config_1.application.domain}:${config_1.application.port}/hello/registration`);
            } catch (err) {
                next(err);
            }
        });
    }
}

exports.InviteCodeController = InviteCodeController;
