import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {schedule_has_mark, schedule_has_markId} from './schedule_has_mark';
import type {users, usersId} from './users';

export interface marksAttributes {
  id: number;
  mark: number;
  user_id: number;
}

export type marksPk = 'id';
export type marksId = marks[marksPk];
export type marksOptionalAttributes = 'id';
export type marksCreationAttributes = Optional<marksAttributes, marksOptionalAttributes>;

export class marks extends Model<marksAttributes, marksCreationAttributes> implements marksAttributes {
  id!: number;
  mark!: number;
  user_id!: number;

  // marks hasMany schedule_has_mark via mark_id
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
  // marks belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof marks {
    return marks.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      mark: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    }, {
    sequelize,
    tableName: 'marks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "marks_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
