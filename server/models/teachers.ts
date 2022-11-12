import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { schedule, scheduleId } from './schedule';
import type { teacher_has_group, teacher_has_groupId } from './teacher_has_group';
import type { users, usersId } from './users';

export interface teachersAttributes {
  user_id: number;
  id: number;
}

export type teachersPk = 'id';
export type teachersId = teachers[teachersPk];
export type teachersOptionalAttributes = 'id';
export type teachersCreationAttributes = Optional<teachersAttributes, teachersOptionalAttributes>;

export class teachers extends Model<teachersAttributes, teachersCreationAttributes> implements teachersAttributes {
  user_id!: number;
  id!: number;

  // teachers hasMany schedule via teacher_id
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
  // teachers hasMany teacher_has_group via teacher_id
  teacher_has_groups!: teacher_has_group[];
  getTeacher_has_groups!: Sequelize.HasManyGetAssociationsMixin<teacher_has_group>;
  setTeacher_has_groups!: Sequelize.HasManySetAssociationsMixin<teacher_has_group, teacher_has_groupId>;
  addTeacher_has_group!: Sequelize.HasManyAddAssociationMixin<teacher_has_group, teacher_has_groupId>;
  addTeacher_has_groups!: Sequelize.HasManyAddAssociationsMixin<teacher_has_group, teacher_has_groupId>;
  createTeacher_has_group!: Sequelize.HasManyCreateAssociationMixin<teacher_has_group>;
  removeTeacher_has_group!: Sequelize.HasManyRemoveAssociationMixin<teacher_has_group, teacher_has_groupId>;
  removeTeacher_has_groups!: Sequelize.HasManyRemoveAssociationsMixin<teacher_has_group, teacher_has_groupId>;
  hasTeacher_has_group!: Sequelize.HasManyHasAssociationMixin<teacher_has_group, teacher_has_groupId>;
  hasTeacher_has_groups!: Sequelize.HasManyHasAssociationsMixin<teacher_has_group, teacher_has_groupId>;
  countTeacher_has_groups!: Sequelize.HasManyCountAssociationsMixin;
  // teachers belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof teachers {
    return teachers.init({
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        unique: 'group_teachers_user_id_key'
      },
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: 'teachers_id_key'
      }
    }, {
      sequelize,
      tableName: 'teachers',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'group_teachers_user_id_key',
          unique: true,
          fields: [
            {name: 'user_id'},
        ]
      },
      {
        name: "teachers_id_key",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "teachers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
