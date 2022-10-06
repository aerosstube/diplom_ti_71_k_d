import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {lesson_problem, lesson_problemId} from './lesson_problem';

export interface lesson_test_problemAttributes {
  id: number;
  question_id: number;
}

export type lesson_test_problemPk = 'id';
export type lesson_test_problemId = lesson_test_problem[lesson_test_problemPk];
export type lesson_test_problemOptionalAttributes = 'id';
export type lesson_test_problemCreationAttributes = Optional<lesson_test_problemAttributes, lesson_test_problemOptionalAttributes>;

export class lesson_test_problem extends Model<lesson_test_problemAttributes, lesson_test_problemCreationAttributes> implements lesson_test_problemAttributes {
  id!: number;
  question_id!: number;

  // lesson_test_problem hasMany lesson_problem via lesson_test_problem_id
  lesson_problems!: lesson_problem[];
  getLesson_problems!: Sequelize.HasManyGetAssociationsMixin<lesson_problem>;
  setLesson_problems!: Sequelize.HasManySetAssociationsMixin<lesson_problem, lesson_problemId>;
  addLesson_problem!: Sequelize.HasManyAddAssociationMixin<lesson_problem, lesson_problemId>;
  addLesson_problems!: Sequelize.HasManyAddAssociationsMixin<lesson_problem, lesson_problemId>;
  createLesson_problem!: Sequelize.HasManyCreateAssociationMixin<lesson_problem>;
  removeLesson_problem!: Sequelize.HasManyRemoveAssociationMixin<lesson_problem, lesson_problemId>;
  removeLesson_problems!: Sequelize.HasManyRemoveAssociationsMixin<lesson_problem, lesson_problemId>;
  hasLesson_problem!: Sequelize.HasManyHasAssociationMixin<lesson_problem, lesson_problemId>;
  hasLesson_problems!: Sequelize.HasManyHasAssociationsMixin<lesson_problem, lesson_problemId>;
  countLesson_problems!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof lesson_test_problem {
    return lesson_test_problem.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'lesson_test_problem',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'lesson_test_problem_pkey',
          unique: true,
          fields: [
            {name: 'id'},
          ]
        },
      ]
    });
  }
}
