import {Router} from 'express';
import {AuthAppController} from "../../controllers/app-controller/auth.app-controller";

const authRouter: Router = Router();

authRouter
    .post('/login', AuthAppController.userLogin)
    .post('/registration', AuthAppController.userRegistration)
    .delete('/logout', AuthAppController.userLogout)
    .get('/refresh', AuthAppController.userRefresh);


export {authRouter};