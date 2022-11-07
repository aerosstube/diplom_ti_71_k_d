import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {marks, marksId} from './marks';
import type {schedule, scheduleId} from './schedule';
import type {students, studentsId} from './students';

export interface schedule_has_markAttributes {
  id: number;
  schedule_id: number;
  mark_id: number;
  student_id: number;
}

export type schedule_has_markPk = 'id';
export type schedule_has_markId = schedule_has_mark[schedule_has_markPk];
export type schedule_has_markOptionalAttributes = 'id';
export type schedule_has_markCreationAttributes = Optional<schedule_has_markAttributes, schedule_has_markOptionalAttributes>;

export class schedule_has_mark extends Model<schedule_has_markAttributes, schedule_has_markCreationAttributes> implements schedule_has_markAttributes {
  id!: number;
  schedule_id!: number;
  mark_id!: number;
  student_id!: number;

  // schedule_has_mark belongsTo marks via mark_id
  mark!: marks;
  getMark!: Sequelize.BelongsToGetAssociationMixin<marks>;
  setMark!: Sequelize.BelongsToSetAssociationMixin<marks, marksId>;
  createMark!: Sequelize.BelongsToCreateAssociationMixin<marks>;
  // schedule_has_mark belongsTo schedule via schedule_id
  schedule!: schedule;
  getSchedule!: Sequelize.BelongsToGetAssociationMixin<schedule>;
  setSchedule!: Sequelize.BelongsToSetAssociationMixin<schedule, scheduleId>;
  createSchedule!: Sequelize.BelongsToCreateAssociationMixin<schedule>;
  // schedule_has_mark belongsTo students via student_id
  student!: students;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<students>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<students, studentsId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<students>;

  static initModel(sequelize: Sequelize.Sequelize): typeof schedule_has_mark {
    return schedule_has_mark.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'schedule',
          key: 'id'
        }
      },
      mark_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'marks',
          key: 'id'
        }
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'schedule_has_mark',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'schedule_has_mark_pkey',
          unique: true,
          fields: [
            {name: 'id'},
          ]
        },
      ]
    });
  }
}
