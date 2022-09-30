import {Router} from 'express';
import {authRouter} from "./auth.router";

const routerSchoolPortal: Router = Router();

routerSchoolPortal
    .use('/auth', authRouter)

export {routerSchoolPortal};
