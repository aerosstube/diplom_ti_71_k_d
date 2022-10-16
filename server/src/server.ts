import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import * as UserAgent from 'express-useragent';
import {application} from '../config/config';
import {initModels} from '../models/init-models';
import {CronJob} from './cron-job';
import {ErrorMiddleware} from './middlewares/error-middleware';
import {routerApp} from './routers/init-router';
import {SequelizeConnect} from './services/database-connect';

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
		.use(ErrorMiddleware)
		.listen(application.port, () => {
			console.log(`Server listening on port = ${application.port}`);
		});
};