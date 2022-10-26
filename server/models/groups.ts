import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {courses_has_groups, courses_has_groupsId} from './courses_has_groups';
import type {group_students, group_studentsId} from './group_students';
import type {group_teachers, group_teachersId} from './group_teachers';
import type {schedule, scheduleId} from './schedule';
import type {users, usersId} from './users';

export interface groupsAttributes {
	id: number;
	user_id: number;
	name: string;
}

export type groupsPk = 'id';
export type groupsId = groups[groupsPk];
export type groupsOptionalAttributes = 'id';
export type groupsCreationAttributes = Optional<groupsAttributes, groupsOptionalAttributes>;

export class groups extends Model<groupsAttributes, groupsCreationAttributes> implements groupsAttributes {
	id!: number;
	user_id!: number;
	name!: string;

	// groups hasMany courses_has_groups via group_id
	courses_has_groups!: courses_has_groups[];
	getCourses_has_groups!: Sequelize.HasManyGetAssociationsMixin<courses_has_groups>;
	setCourses_has_groups!: Sequelize.HasManySetAssociationsMixin<courses_has_groups, courses_has_groupsId>;
	addCourses_has_group!: Sequelize.HasManyAddAssociationMixin<courses_has_groups, courses_has_groupsId>;
	addCourses_has_groups!: Sequelize.HasManyAddAssociationsMixin<courses_has_groups, courses_has_groupsId>;
	createCourses_has_group!: Sequelize.HasManyCreateAssociationMixin<courses_has_groups>;
	removeCourses_has_group!: Sequelize.HasManyRemoveAssociationMixin<courses_has_groups, courses_has_groupsId>;
	removeCourses_has_groups!: Sequelize.HasManyRemoveAssociationsMixin<courses_has_groups, courses_has_groupsId>;
	hasCourses_has_group!: Sequelize.HasManyHasAssociationMixin<courses_has_groups, courses_has_groupsId>;
	hasCourses_has_groups!: Sequelize.HasManyHasAssociationsMixin<courses_has_groups, courses_has_groupsId>;
	countCourses_has_groups!: Sequelize.HasManyCountAssociationsMixin;
	// groups hasMany group_students via group_id
	group_students!: group_students[];
	getGroup_students!: Sequelize.HasManyGetAssociationsMixin<group_students>;
	setGroup_students!: Sequelize.HasManySetAssociationsMixin<group_students, group_studentsId>;
	addGroup_student!: Sequelize.HasManyAddAssociationMixin<group_students, group_studentsId>;
	addGroup_students!: Sequelize.HasManyAddAssociationsMixin<group_students, group_studentsId>;
	createGroup_student!: Sequelize.HasManyCreateAssociationMixin<group_students>;
	removeGroup_student!: Sequelize.HasManyRemoveAssociationMixin<group_students, group_studentsId>;
	removeGroup_students!: Sequelize.HasManyRemoveAssociationsMixin<group_students, group_studentsId>;
	hasGroup_student!: Sequelize.HasManyHasAssociationMixin<group_students, group_studentsId>;
	hasGroup_students!: Sequelize.HasManyHasAssociationsMixin<group_students, group_studentsId>;
	countGroup_students!: Sequelize.HasManyCountAssociationsMixin;
	// groups hasMany group_teachers via group_id
	group_teachers!: group_teachers[];
	getGroup_teachers!: Sequelize.HasManyGetAssociationsMixin<group_teachers>;
	setGroup_teachers!: Sequelize.HasManySetAssociationsMixin<group_teachers, group_teachersId>;
	addGroup_teacher!: Sequelize.HasManyAddAssociationMixin<group_teachers, group_teachersId>;
	addGroup_teachers!: Sequelize.HasManyAddAssociationsMixin<group_teachers, group_teachersId>;
	createGroup_teacher!: Sequelize.HasManyCreateAssociationMixin<group_teachers>;
	removeGroup_teacher!: Sequelize.HasManyRemoveAssociationMixin<group_teachers, group_teachersId>;
	removeGroup_teachers!: Sequelize.HasManyRemoveAssociationsMixin<group_teachers, group_teachersId>;
	hasGroup_teacher!: Sequelize.HasManyHasAssociationMixin<group_teachers, group_teachersId>;
	hasGroup_teachers!: Sequelize.HasManyHasAssociationsMixin<group_teachers, group_teachersId>;
	countGroup_teachers!: Sequelize.HasManyCountAssociationsMixin;
	// groups hasMany schedule via group_id
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
	// groups hasMany schedule via group_teacher_id
	group_teacher_schedules!: schedule[];
	getGroup_teacher_schedules!: Sequelize.HasManyGetAssociationsMixin<schedule>;
	setGroup_teacher_schedules!: Sequelize.HasManySetAssociationsMixin<schedule, scheduleId>;
	addGroup_teacher_schedule!: Sequelize.HasManyAddAssociationMixin<schedule, scheduleId>;
	addGroup_teacher_schedules!: Sequelize.HasManyAddAssociationsMixin<schedule, scheduleId>;
	createGroup_teacher_schedule!: Sequelize.HasManyCreateAssociationMixin<schedule>;
	removeGroup_teacher_schedule!: Sequelize.HasManyRemoveAssociationMixin<schedule, scheduleId>;
	removeGroup_teacher_schedules!: Sequelize.HasManyRemoveAssociationsMixin<schedule, scheduleId>;
	hasGroup_teacher_schedule!: Sequelize.HasManyHasAssociationMixin<schedule, scheduleId>;
	hasGroup_teacher_schedules!: Sequelize.HasManyHasAssociationsMixin<schedule, scheduleId>;
	countGroup_teacher_schedules!: Sequelize.HasManyCountAssociationsMixin;
	// groups belongsTo users via user_id
	user!: users;
	getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
	setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
	createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

	static initModel(sequelize: Sequelize.Sequelize): typeof groups {
		return groups.init({
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
			name: {
				type: DataTypes.STRING(256),
				allowNull: false
			}
		}, {
			sequelize,
			tableName: 'groups',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'groups_pkey',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
			]
		});
	}
}
