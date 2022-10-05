import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { lesson_problem, lesson_problemId } from './lesson_problem';
import type { schedule, scheduleId } from './schedule';
import type { two_our_class, two_our_classId } from './two_our_class';

export interface lessonsAttributes {
  id: number;
  title: string;
  minutes: number;
  two_our_class_id?: number;
  lesson_problem_id: number;
}

export type lessonsPk = "id";
export type lessonsId = lessons[lessonsPk];
export type lessonsOptionalAttributes = "id" | "two_our_class_id";
export type lessonsCreationAttributes = Optional<lessonsAttributes, lessonsOptionalAttributes>;

export class lessons extends Model<lessonsAttributes, lessonsCreationAttributes> implements lessonsAttributes {
  id!: number;
  title!: string;
  minutes!: number;
  two_our_class_id?: number;
  lesson_problem_id!: number;

  // lessons belongsTo lesson_problem via lesson_problem_id
  lesson_problem!: lesson_problem;
  getLesson_problem!: Sequelize.BelongsToGetAssociationMixin<lesson_problem>;
  setLesson_problem!: Sequelize.BelongsToSetAssociationMixin<lesson_problem, lesson_problemId>;
  createLesson_problem!: Sequelize.BelongsToCreateAssociationMixin<lesson_problem>;
  // lessons hasMany schedule via lesson_id
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
  // lessons belongsTo two_our_class via two_our_class_id
  two_our_class!: two_our_class;
  getTwo_our_class!: Sequelize.BelongsToGetAssociationMixin<two_our_class>;
  setTwo_our_class!: Sequelize.BelongsToSetAssociationMixin<two_our_class, two_our_classId>;
  createTwo_our_class!: Sequelize.BelongsToCreateAssociationMixin<two_our_class>;

  static initModel(sequelize: Sequelize.Sequelize): typeof lessons {
    return lessons.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    minutes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    two_our_class_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'two_our_class',
        key: 'id'
      }
    },
    lesson_problem_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lesson_problem',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'lessons',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "lessons_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
