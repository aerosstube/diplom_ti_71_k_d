import express from 'express';
import {application} from "../config/config";
import cors from 'cors';
import {routerSchoolPortal} from "./API/api.version-1/routers/app-router/init-router";
import {SequelizeConnect} from "./services/database-connect";
import {Sequelize} from "sequelize";
import bodyParser from "body-parser";

const app = express();

export async function run() {
    await SequelizeConnect.authenticate();
    await SequelizeConnect.sync();

    app
        .use(cors())
        .use(bodyParser.json())
        .use(express.json())
        .use('/api', routerSchoolPortal)
        .listen(application.port, () => {
            console.log( `Listening on PORT = ${application.port}`)
        });
}