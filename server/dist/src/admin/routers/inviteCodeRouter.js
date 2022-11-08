"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.inviteCodeRouter = void 0;
const express_1 = require("express");
const inviteCode_controller_1 = require("../controllers/inviteCode.controller");
const inviteCodeRouter = (0, express_1.Router)();
exports.inviteCodeRouter = inviteCodeRouter;
inviteCodeRouter
    .post('/create', inviteCode_controller_1.InviteCodeController.createInviteCode);
