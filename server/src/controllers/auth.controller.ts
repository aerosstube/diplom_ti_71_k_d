import {NextFunction, Request, Response} from 'express';
import {Transaction} from 'sequelize';
import {AuthBusinessService, AuthOptions} from '../services/auth-services/auth.business.service';
import {JwtTokens} from '../services/auth-services/auth.service';
import {SequelizeConnect} from '../services/database-connect';


export class AuthController {
	static async userLogin(req: Request, res: Response, next: NextFunction) {
		const transaction: Transaction = await SequelizeConnect.transaction();
		try {
			const {body: {user}, useragent, headers, socket} = req;

			const deviceIp: string | undefined = (headers['x-forwarded-for']) ? (headers['x-forwarded-for']).toString() : socket.remoteAddress;

			const authOptions: AuthOptions = {
				deviceIp: deviceIp,
				userAgent: useragent?.source,
				password: user.password,
				login: user.login
			};

			const tokens: JwtTokens = await AuthBusinessService.userLogin(authOptions, transaction);

			res.json(tokens);
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