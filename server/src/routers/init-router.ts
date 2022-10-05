import {Router} from "express";
import {authRouter} from "./auth.router";

const routerApp: Router = Router();

routerApp
    .use('/auth', authRouter)

export {routerApp}
