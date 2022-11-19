import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import * as UserAgent from 'express-useragent';
import path from 'path';
import { application } from '../config/config';
import { initModels } from '../models/init-models';
import { adminRouterApp } from './admin/routers/init-router';
import { ErrorMiddleware } from './client/middlewares/error-middleware';
import { clientAppRouter } from './client/routers/clientApp.router';
import { routerApp } from './client/routers/init-router';
import { SequelizeConnect } from './client/services/database-connect';
import { CronJob } from './cron-job';

export const app = express();

export const run = async () => {
	initModels(SequelizeConnect);

	await CronJob.startJob();

	app
		.use(UserAgent.express())
		.use(cors())
		.use(bodyParser.json())
		.use(express.json())
		.use(cookieParser())
		.use('/api', routerApp)
		.use('/api/admin', adminRouterApp)
		.use(express.static(path.join(__dirname, 'public')))
		.use(express.static(path.join(__dirname, 'public/app')))
		.use('/', clientAppRouter)
		.use(ErrorMiddleware)
		.listen(application.port, () => {
			console.log(`Server listening on port = ${application.port}`);
		});
};