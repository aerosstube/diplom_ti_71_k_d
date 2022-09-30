import express from 'express';
import {application} from "../config/config";
import cors from 'cors';

const app = express();

export async function run() {
    app
        .use(cors())
        .listen(application.port, () => {
            console.log( `Listening on PORT = ${application.port}`)
        });
}