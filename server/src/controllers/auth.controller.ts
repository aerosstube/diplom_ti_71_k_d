import {NextFunction, Request, Response} from "express";
import {AuthDatabaseService} from "../services/auth-services/auth.database.service";
import {users} from "../../models/init-models";

export class AuthController {
    static async userLogin(req: Request, res: Response, next: NextFunction) {
        try {
            res.json(await AuthDatabaseService.getAllUsers());
        } catch (err) {
            console.log(err)
        }
    }

    static async userLogout(req: Request, res: Response, next: NextFunction) {

    }

    static async userRefresh(req: Request, res: Response, next: NextFunction) {

    }
}