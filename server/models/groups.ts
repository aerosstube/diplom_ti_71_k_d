import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {schedule, scheduleId} from './schedule';
import type {students, studentsId} from './students';
import type {teachers, teachersId} from './teachers';
import type {users, usersId} from './users';

export interface groupsAttributes {
  id: number;
  user_id: number;
  name: string;
}

export type groupsPk = "id";
export type groupsId = groups[groupsPk];
export type groupsOptionalAttributes = "id";
export type groupsCreationAttributes = Optional<groupsAttributes, groupsOptionalAttributes>;

export class groups extends Model<groupsAttributes, groupsCreationAttributes> implements groupsAttributes {
  id!: number;
  user_id!: number;
  name!: string;

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
  // groups hasMany students via group_id
  students!: students[];
  getStudents!: Sequelize.HasManyGetAssociationsMixin<students>;
  setStudents!: Sequelize.HasManySetAssociationsMixin<students, studentsId>;
  addStudent!: Sequelize.HasManyAddAssociationMixin<students, studentsId>;
  addStudents!: Sequelize.HasManyAddAssociationsMixin<students, studentsId>;
  createStudent!: Sequelize.HasManyCreateAssociationMixin<students>;
  removeStudent!: Sequelize.HasManyRemoveAssociationMixin<students, studentsId>;
  removeStudents!: Sequelize.HasManyRemoveAssociationsMixin<students, studentsId>;
  hasStudent!: Sequelize.HasManyHasAssociationMixin<students, studentsId>;
  hasStudents!: Sequelize.HasManyHasAssociationsMixin<students, studentsId>;
  countStudents!: Sequelize.HasManyCountAssociationsMixin;
  // groups hasMany teachers via group_id
  teachers!: teachers[];
  getTeachers!: Sequelize.HasManyGetAssociationsMixin<teachers>;
  setTeachers!: Sequelize.HasManySetAssociationsMixin<teachers, teachersId>;
  addTeacher!: Sequelize.HasManyAddAssociationMixin<teachers, teachersId>;
  addTeachers!: Sequelize.HasManyAddAssociationsMixin<teachers, teachersId>;
  createTeacher!: Sequelize.HasManyCreateAssociationMixin<teachers>;
  removeTeacher!: Sequelize.HasManyRemoveAssociationMixin<teachers, teachersId>;
  removeTeachers!: Sequelize.HasManyRemoveAssociationsMixin<teachers, teachersId>;
  hasTeacher!: Sequelize.HasManyHasAssociationMixin<teachers, teachersId>;
  hasTeachers!: Sequelize.HasManyHasAssociationsMixin<teachers, teachersId>;
  countTeachers!: Sequelize.HasManyCountAssociationsMixin;
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
        name: "groups_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
