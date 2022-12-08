import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface invite_codesAttributes {
	id: number;
	group_name: string;
	invite_code: string;
	is_teacher: boolean;
}

export type invite_codesPk = 'id';
export type invite_codesId = invite_codes[invite_codesPk];
export type invite_codesOptionalAttributes = 'id';
export type invite_codesCreationAttributes = Optional<invite_codesAttributes, invite_codesOptionalAttributes>;

export class invite_codes extends Model<invite_codesAttributes, invite_codesCreationAttributes> implements invite_codesAttributes {
	id!: number;
	group_name!: string;
	invite_code!: string;
	is_teacher!: boolean;


	static initModel(sequelize: Sequelize.Sequelize): typeof invite_codes {
		return invite_codes.init({
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				unique: 'invite_codes_id_key'
			},
			group_name: {
				type: DataTypes.STRING(256),
				allowNull: false
			},
			invite_code: {
				type: DataTypes.STRING(32),
				allowNull: false
			},
			is_teacher: {
				type: DataTypes.BOOLEAN,
				allowNull: false
			}
		}, {
			sequelize,
			tableName: 'invite_codes',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'invite_codes_id_key',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
				{
					name: 'invite_codes_pkey',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
			]
		});
	}
}
