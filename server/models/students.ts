import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {groups, groupsId} from './groups';
import type {schedule_has_mark, schedule_has_markId} from './schedule_has_mark';
import type {users, usersId} from './users';

export interface studentsAttributes {
  id: number;
  user_id: number;
  group_id: number;
}

export type studentsPk = 'id';
export type studentsId = students[studentsPk];
export type studentsOptionalAttributes = 'id';
export type studentsCreationAttributes = Optional<studentsAttributes, studentsOptionalAttributes>;

export class students extends Model<studentsAttributes, studentsCreationAttributes> implements studentsAttributes {
  id!: number;
  user_id!: number;
  group_id!: number;

  // students belongsTo groups via group_id
  group!: groups;
  getGroup!: Sequelize.BelongsToGetAssociationMixin<groups>;
  setGroup!: Sequelize.BelongsToSetAssociationMixin<groups, groupsId>;
  createGroup!: Sequelize.BelongsToCreateAssociationMixin<groups>;
  // students hasMany schedule_has_mark via student_id
  schedule_has_marks!: schedule_has_mark[];
  getSchedule_has_marks!: Sequelize.HasManyGetAssociationsMixin<schedule_has_mark>;
  setSchedule_has_marks!: Sequelize.HasManySetAssociationsMixin<schedule_has_mark, schedule_has_markId>;
  addSchedule_has_mark!: Sequelize.HasManyAddAssociationMixin<schedule_has_mark, schedule_has_markId>;
  addSchedule_has_marks!: Sequelize.HasManyAddAssociationsMixin<schedule_has_mark, schedule_has_markId>;
  createSchedule_has_mark!: Sequelize.HasManyCreateAssociationMixin<schedule_has_mark>;
  removeSchedule_has_mark!: Sequelize.HasManyRemoveAssociationMixin<schedule_has_mark, schedule_has_markId>;
  removeSchedule_has_marks!: Sequelize.HasManyRemoveAssociationsMixin<schedule_has_mark, schedule_has_markId>;
  hasSchedule_has_mark!: Sequelize.HasManyHasAssociationMixin<schedule_has_mark, schedule_has_markId>;
  hasSchedule_has_marks!: Sequelize.HasManyHasAssociationsMixin<schedule_has_mark, schedule_has_markId>;
  countSchedule_has_marks!: Sequelize.HasManyCountAssociationsMixin;
  // students belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof students {
    return students.init({
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
    tableName: 'students',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "group_students_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
