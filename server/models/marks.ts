import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { schedule, scheduleId } from './schedule';
import type { students, studentsId } from './students';

export interface marksAttributes {
  id: number;
  mark: string;
  student_id: number;
  schedule_id: number;
}

export type marksPk = 'id';
export type marksId = marks[marksPk];
export type marksOptionalAttributes = 'id';
export type marksCreationAttributes = Optional<marksAttributes, marksOptionalAttributes>;

export class marks extends Model<marksAttributes, marksCreationAttributes> implements marksAttributes {
  id!: number;
  mark!: string;
  student_id!: number;
  schedule_id!: number;

  // marks belongsTo schedule via schedule_id
  schedule!: schedule;
  getSchedule!: Sequelize.BelongsToGetAssociationMixin<schedule>;
  setSchedule!: Sequelize.BelongsToSetAssociationMixin<schedule, scheduleId>;
  createSchedule!: Sequelize.BelongsToCreateAssociationMixin<schedule>;
  // marks belongsTo students via student_id
  student!: students;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<students>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<students, studentsId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<students>;

  static initModel(sequelize: Sequelize.Sequelize): typeof marks {
    return marks.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: 'marks_id_key1'
      },
      mark: {
        type: DataTypes.STRING,
        allowNull: false
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'students',
          key: 'id'
        }
      },
      schedule_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'schedule',
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
          name: 'marks_id_key',
          unique: true,
          fields: [
            {name: 'id'},
          ]
        },
        {
          name: 'marks_id_key1',
          unique: true,
          fields: [
            {name: 'id'},
          ]
        },
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
