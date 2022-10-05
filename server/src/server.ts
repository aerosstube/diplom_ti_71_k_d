import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import {application} from '../config/config';
import {routerApp} from './routers/init-router';
import {SequelizeConnect} from './services/database-connect';

export const app = express();

export const run = async () => {
	await SequelizeConnect.authenticate();
	await SequelizeConnect.sync();

	app
		.use(cors())
		.use(bodyParser.json())
		.use(cookieParser())
		.use('/api', routerApp)
		.listen(application.port, () => {
			console.log(`Server listening on port = ${application.port}`);
		});
};