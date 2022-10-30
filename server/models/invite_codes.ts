import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';

export interface invite_codesAttributes {
	id: number;
	invite_code: string;
	group_name: string;
}

export type invite_codesPk = 'id';
export type invite_codesId = invite_codes[invite_codesPk];
export type invite_codesOptionalAttributes = 'id';
export type invite_codesCreationAttributes = Optional<invite_codesAttributes, invite_codesOptionalAttributes>;

export class invite_codes extends Model<invite_codesAttributes, invite_codesCreationAttributes> implements invite_codesAttributes {
	id!: number;
	invite_code!: string;
	group_name!: string;


	static initModel(sequelize: Sequelize.Sequelize): typeof invite_codes {
		return invite_codes.init({
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			invite_code: {
				type: DataTypes.STRING(64),
				allowNull: false
			},
			group_name: {
				type: DataTypes.STRING(64),
				allowNull: false
			}
		}, {
			sequelize,
			tableName: 'invite_codes',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'inviteCodes_pkey',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
			]
		});
	}
}
