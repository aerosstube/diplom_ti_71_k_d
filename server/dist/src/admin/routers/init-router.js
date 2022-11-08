"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.adminRouterApp = void 0;
const express_1 = require("express");
const inviteCodeRouter_1 = require("./inviteCodeRouter");
const adminRouterApp = (0, express_1.Router)();
exports.adminRouterApp = adminRouterApp;
adminRouterApp
    .use('/inviteCode', inviteCodeRouter_1.inviteCodeRouter);
