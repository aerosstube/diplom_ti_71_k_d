import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {groups, groupsId} from './groups';
import type {schedule, scheduleId} from './schedule';
import type {users, usersId} from './users';

export interface group_teachersAttributes {
	group_id: number;
	user_id: number;
	course_id: number;
	id: number;
}

export type group_teachersPk = 'id';
export type group_teachersId = group_teachers[group_teachersPk];
export type group_teachersOptionalAttributes = 'id';
export type group_teachersCreationAttributes = Optional<group_teachersAttributes, group_teachersOptionalAttributes>;

export class group_teachers extends Model<group_teachersAttributes, group_teachersCreationAttributes> implements group_teachersAttributes {
	group_id!: number;
	user_id!: number;
	course_id!: number;
	id!: number;

	// group_teachers hasMany schedule via teacher_id
	schedules!: schedule[];
	getSchedules!: Sequelize.HasManyGetAssociationsMixin<schedule>;
	setSchedules!: Sequelize.HasManySetAssociationsMixin<schedule, scheduleId>;
	addSchedule!: Sequelize.HasManyAddAssociationMixin<schedule, scheduleId>;
	addSchedules!: Sequelize.HasManyAddAssociationsMixin<schedule, scheduleId>;
	createSchedule!: Sequelize.HasManyCreateAssociationMixin<schedule>;
	removeSchedule!: Sequelize.HasManyRemoveAssociationMixin<schedule, scheduleId>;
	removeSchedules!: Sequelize.HasManyRemoveAssociationsMixin<schedule, scheduleId>;
	hasSchedule!: Sequelize.HasManyHasAssociationMixin<schedule, scheduleId>;
	hasSchedules!: Sequelize.HasManyHasAssociationsMixin<schedule, scheduleId>;
	countSchedules!: Sequelize.HasManyCountAssociationsMixin;
	// group_teachers belongsTo groups via group_id
	group!: groups;
	getGroup!: Sequelize.BelongsToGetAssociationMixin<groups>;
	setGroup!: Sequelize.BelongsToSetAssociationMixin<groups, groupsId>;
	createGroup!: Sequelize.BelongsToCreateAssociationMixin<groups>;
	// group_teachers belongsTo users via user_id
	user!: users;
	getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
	setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
	createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

	static initModel(sequelize: Sequelize.Sequelize): typeof group_teachers {
		return group_teachers.init({
			group_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'groups',
					key: 'id'
				}
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id'
				},
				unique: 'group_teachers_user_id_key'
			},
			course_id: {
				type: DataTypes.INTEGER,
				allowNull: false
			},
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				unique: 'group_teachers_id_key'
			}
		}, {
			sequelize,
			tableName: 'group_teachers',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'group_teachers_id_key',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
				{
					name: 'group_teachers_pkey',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
				{
					name: 'group_teachers_user_id_key',
					unique: true,
					fields: [
						{name: 'user_id'},
					]
				},
			]
		});
	}
}
