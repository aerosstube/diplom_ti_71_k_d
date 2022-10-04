import {NextFunction, Request, Response} from "express";
import {Transaction} from "sequelize";
import {SequelizeConnect} from "../../../../services/database-connect";
import {UserService} from "../../../../services/user-services/user.service";
import {AuthOptions} from "../../../../services/auth-services/authorization.business.service";

export class AuthAppController {
    public static async userLogin(req: Request, res: Response, next: NextFunction) {
        console.log('asfsadfhkjasd')
        return res.json('Все воркает :)')
    }

    public static async userLogout(req: Request, res: Response, next: NextFunction) {

    }

    public static async userRegistration(req: Request, res: Response, next: NextFunction) {
        const transaction: Transaction = await SequelizeConnect.transaction();
        try {
            const {body: {user}} = req;
            console.log('ЧТО-ТО ВАЖНОЕ ППЦ ======================= ');
            const current_body: object = JSON.parse(user);
            await transaction.commit();
            return res.json(await UserService.createUser(user, transaction));
        } catch (err) {
            await transaction.rollback();
            return console.log(err);
        }
    }

    public static async userRefresh(req: Request, res: Response, next: NextFunction) {

    }
}