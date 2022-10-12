import {Router} from "express";
import {AuthController} from "../controllers/auth.controller";
import * as crypto from 'bcryptjs';

const authRouter: Router = Router();

authRouter
    .post('/login', AuthController.userLogin)
    .delete('/logout', (req, res) => {
	    console.log(hash('26122003z'));
    })
    .get('/refresh', AuthController.userRefresh);

export {authRouter}