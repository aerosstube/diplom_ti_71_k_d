"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.routerApp = void 0;
const express_1 = require("express");
const auth_router_1 = require("./auth.router");
const inviteCode_router_1 = require("./inviteCode.router");
const schedule_router_1 = require("./schedule.router");
const routerApp = (0, express_1.Router)();
exports.routerApp = routerApp;
routerApp
    .use('/auth', auth_router_1.authRouter)
    .use('/inviteCode', inviteCode_router_1.inviteCodeRouter)
    .use('/schedule', schedule_router_1.scheduleRouter);
