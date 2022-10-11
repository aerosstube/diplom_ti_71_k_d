import {NextFunction, Request, Response} from 'express';
import {Transaction} from 'sequelize';
import {AuthDatabaseService} from '../services/auth-services/auth.database.service';
import {SequelizeConnect} from '../services/database-connect';

export class AuthController {
    static async userLogin(req: Request, res: Response, next: NextFunction) {
        const transaction: Transaction = await SequelizeConnect.transaction();
        try {
            let user = 123;
            await transaction.commit();
        } catch (err) {
            await transaction.rollback();
            next(err);
        }

    }

    static async userLogout(req: Request, res: Response, next: NextFunction) {

    }

    static async userRefresh(req: Request, res: Response, next: NextFunction) {

    }
}