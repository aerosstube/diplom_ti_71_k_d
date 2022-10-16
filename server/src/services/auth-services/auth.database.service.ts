import {Op, Transaction} from 'sequelize';
import {token} from '../../../models/token';
import {user_devices} from '../../../models/user_devices';
import {SaveTokens} from './auth.business.service';

export interface SaveDevice {
	device: string;
}

export interface DeviceInfo {
	device_source?: string;
	device_ip?: string;
}

export class AuthDatabaseService {

	static async createToken(saveToken: SaveTokens, transaction: Transaction, user_device_id: number): Promise<token> {
		return await token.create({
			user_id: saveToken.userId,
			refresh_token: saveToken.refreshToken,
			date_expired: saveToken.dateExpired,
			user_device_id: user_device_id,
		}, {
			transaction,
		});
	}

	static async findToken(saveToken: SaveTokens): Promise<token | null> {
		return await token.findOne({
			where: {
				user_id: saveToken.userId,
			}
		});
	}

	static async findUserDevice(saveToken: SaveTokens): Promise<user_devices | null> {
		return await user_devices.findOne({
			where: {
				device_ip: saveToken.deviceIp,
				device_source: saveToken.userAgent
			}
		});
	}

	static async findExpiredTokens(dateExpired: Date): Promise<token[] | null> {
		return await token.findAll({
			where: {
				date_expired: {
					[Op.lt]: dateExpired
				}
			}
		});
	}

	static async createUserDevice(deviceInfo: DeviceInfo, transaction: Transaction): Promise<user_devices> {
		return await user_devices.create({
			device_ip: deviceInfo.device_ip,
			device_source: deviceInfo.device_source
		}, {transaction});
	}
}