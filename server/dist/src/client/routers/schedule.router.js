"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.scheduleRouter = void 0;
const express_1 = require("express");
const schedule_controller_1 = require("../controllers/schedule.controller");
const auth_middleware_1 = require("../middlewares/auth-middleware");
const scheduleRouter = (0, express_1.Router)();
exports.scheduleRouter = scheduleRouter;
scheduleRouter
    .get('/get_week', auth_middleware_1.AuthMiddleware, schedule_controller_1.ScheduleController.getScheduleWeek);
