import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { students, studentsId } from './students';
import type { two_our_class, two_our_classId } from './two_our_class';

export interface marksAttributes {
  id: number;
  mark: string;
  student_id: number;
  two_our_class_id: number;
  date: Date;
}

export type marksPk = 'id';
export type marksId = marks[marksPk];
export type marksOptionalAttributes = 'id';
export type marksCreationAttributes = Optional<marksAttributes, marksOptionalAttributes>;

export class marks extends Model<marksAttributes, marksCreationAttributes> implements marksAttributes {
  id!: number;
  mark!: string;
  student_id!: number;
  two_our_class_id!: number;
  date!: Date;

  // marks belongsTo students via student_id
  student!: students;
  getStudent!: Sequelize.BelongsToGetAssociationMixin<students>;
  setStudent!: Sequelize.BelongsToSetAssociationMixin<students, studentsId>;
  createStudent!: Sequelize.BelongsToCreateAssociationMixin<students>;
  // marks belongsTo two_our_class via two_our_class_id
  two_our_class!: two_our_class;
  getTwo_our_class!: Sequelize.BelongsToGetAssociationMixin<two_our_class>;
  setTwo_our_class!: Sequelize.BelongsToSetAssociationMixin<two_our_class, two_our_classId>;
  createTwo_our_class!: Sequelize.BelongsToCreateAssociationMixin<two_our_class>;

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
        type: DataTypes.STRING(1),
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
      two_our_class_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'two_our_class',
          key: 'id'
        }
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false
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
