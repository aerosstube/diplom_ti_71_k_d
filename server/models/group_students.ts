import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {groups, groupsId} from './groups';
import type {users, usersId} from './users';

export interface group_studentsAttributes {
	id: number;
	user_id: number;
	group_id: number;
}

export type group_studentsPk = 'id';
export type group_studentsId = group_students[group_studentsPk];
export type group_studentsOptionalAttributes = 'id';
export type group_studentsCreationAttributes = Optional<group_studentsAttributes, group_studentsOptionalAttributes>;

export class group_students extends Model<group_studentsAttributes, group_studentsCreationAttributes> implements group_studentsAttributes {
	id!: number;
	user_id!: number;
	group_id!: number;

	// group_students belongsTo groups via group_id
	group!: groups;
	getGroup!: Sequelize.BelongsToGetAssociationMixin<groups>;
	setGroup!: Sequelize.BelongsToSetAssociationMixin<groups, groupsId>;
	createGroup!: Sequelize.BelongsToCreateAssociationMixin<groups>;
	// group_students belongsTo users via user_id
	user!: users;
	getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
	setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
	createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

	static initModel(sequelize: Sequelize.Sequelize): typeof group_students {
		return group_students.init({
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id'
				}
			},
			group_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'groups',
					key: 'id'
				}
			}
		}, {
			sequelize,
			tableName: 'group_students',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'group_students_pkey',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
			]
		});
	}
}
