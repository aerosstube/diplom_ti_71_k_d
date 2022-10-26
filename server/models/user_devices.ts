import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {token, tokenId} from './token';

export interface user_devicesAttributes {
	id: number;
	user_agent?: string;
	device_ip?: string;
}

export type user_devicesPk = 'id';
export type user_devicesId = user_devices[user_devicesPk];
export type user_devicesOptionalAttributes = 'id' | 'user_agent' | 'device_ip';
export type user_devicesCreationAttributes = Optional<user_devicesAttributes, user_devicesOptionalAttributes>;

export class user_devices extends Model<user_devicesAttributes, user_devicesCreationAttributes> implements user_devicesAttributes {
	id!: number;
	user_agent?: string;
	device_ip?: string;

	// user_devices hasMany token via user_device_id
	tokens!: token[];
	getTokens!: Sequelize.HasManyGetAssociationsMixin<token>;
	setTokens!: Sequelize.HasManySetAssociationsMixin<token, tokenId>;
	addToken!: Sequelize.HasManyAddAssociationMixin<token, tokenId>;
	addTokens!: Sequelize.HasManyAddAssociationsMixin<token, tokenId>;
	createToken!: Sequelize.HasManyCreateAssociationMixin<token>;
	removeToken!: Sequelize.HasManyRemoveAssociationMixin<token, tokenId>;
	removeTokens!: Sequelize.HasManyRemoveAssociationsMixin<token, tokenId>;
	hasToken!: Sequelize.HasManyHasAssociationMixin<token, tokenId>;
	hasTokens!: Sequelize.HasManyHasAssociationsMixin<token, tokenId>;
	countTokens!: Sequelize.HasManyCountAssociationsMixin;

	static initModel(sequelize: Sequelize.Sequelize): typeof user_devices {
		return user_devices.init({
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				unique: 'user_device_id_key'
			},
			user_agent: {
				type: DataTypes.STRING(2048),
				allowNull: true
			},
			device_ip: {
				type: DataTypes.STRING(256),
				allowNull: true
			}
		}, {
			sequelize,
			tableName: 'user_devices',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'user_device_id_key',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
				{
					name: 'user_device_pkey',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
			]
		});
	}
}
