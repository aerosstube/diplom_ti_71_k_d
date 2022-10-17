import {compare} from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import {Transaction} from 'sequelize';
import {application} from '../../../config/config';
import {token} from '../../../models/token';
import {user_devices} from '../../../models/user_devices';
import {users} from '../../../models/users';
import {ApiError} from '../../errors/api.error';
import {UserService} from '../user-services/user.service';
import {SaveTokens, TokenOptions} from './auth.business.service';
import {AuthDatabaseService, DeviceInfo} from './auth.database.service';

export interface AuthUser {
	userId: number;
	login: string;
	first_name: string;
	second_name: string;
	middle_name?: string;
}

export interface JwtTokens {
	refreshToken: string;
	accessToken: string;
}


export class AuthService {

	static async checkUser(login: string, password: string, transaction: Transaction): Promise<AuthUser> {
		const user: users = await UserService.findByLogin(login, transaction);
		const isPassword = await compare(password, user.password);

		if (!isPassword)
			throw ApiError.BadRequest('Ошибка авторизации!');

		return {
			userId: user.id,
			login: user.login,
			first_name: user.first_name,
			second_name: user.second_name,
			middle_name: user.middle_name,
		};
	}

	static async saveToken(saveToken: SaveTokens, transaction: Transaction): Promise<void> {
		try {
			const deviceInfo: DeviceInfo = {
				userAgent: saveToken.userAgent,
				deviceIp: saveToken.deviceIp
			};
			let deviceData: user_devices | null = await AuthDatabaseService.findUserDeviceByUA(deviceInfo);
			if (!deviceData) {
				deviceData = await AuthDatabaseService.createUserDevice({
					device_ip: saveToken.deviceIp,
					user_agent: saveToken.userAgent
				}, transaction);
			}

			let tokenData: token | null = await AuthDatabaseService.findTokenByUserId(saveToken);

			if (!tokenData)
				tokenData = await AuthDatabaseService.createToken(saveToken, transaction, deviceData.id);

			tokenData.refresh_token = saveToken.refreshToken;
			await tokenData.save();
		} catch (err) {
			console.log(err);
			throw ApiError.BadRequest('Ошибка авторизации!');
		}
	}

	static async generateToken(payload: AuthUser, refreshToken: string | null = null): Promise<JwtTokens> {
		return {
			refreshToken: (refreshToken) ? refreshToken : jwt.sign(payload, application.refreshToken, {expiresIn: '30d'}),
			accessToken: jwt.sign(payload, application.accessToken, {expiresIn: '15m'}),
		};
	}


	static validateRefreshToken(refreshToken: string): TokenOptions {
		try {
			const payload = jwt.verify(refreshToken, application.refreshToken);
			// @ts-ignore
			return Object.assign(payload);
		} catch (e) {
			throw ApiError.UnauthorizedError();
		}
	}

	static async destroyExpiredTokens(): Promise<void> {
		const dateExpired: Date = new Date;
		const tokens = await AuthDatabaseService.findExpiredTokens(dateExpired);

		if (tokens) {
			for (const token of tokens) {
				const device: user_devices | null = await user_devices.findOne({
					where: {
						id: token.user_device_id
					}
				});

				await token.destroy();

				if (device)
					await device.destroy();
			}
		}
	}

	static async deleteToken(refreshToken: string, transaction: Transaction): Promise<token> {
		const tokenData = await AuthDatabaseService.findToken(refreshToken);
		if (tokenData === null)
			throw ApiError.UnauthorizedError();

		await tokenData.destroy({transaction});

		return tokenData;
	}

	static async deleteUserDevice(tokenData: token, transaction: Transaction): Promise<void> {
		const deviceData = await AuthDatabaseService.findDeviceById(tokenData.user_device_id);
		if (deviceData === null)
			throw ApiError.UnauthorizedError();

		await deviceData.destroy({transaction});
	}
}