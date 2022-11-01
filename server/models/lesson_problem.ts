import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {lesson_problem_type, lesson_problem_typeId} from './lesson_problem_type';
import type {
	lesson_standart_problem_content,
	lesson_standart_problem_contentId
} from './lesson_standart_problem_content';
import type {lesson_test_problem, lesson_test_problemId} from './lesson_test_problem';
import type {lessons, lessonsId} from './lessons';

export interface lesson_problemAttributes {
  id: number;
  lesson_problem_type_id: number;
  lesson_problem_content_id?: number;
  lesson_test_problem_id?: number;
}

export type lesson_problemPk = "id";
export type lesson_problemId = lesson_problem[lesson_problemPk];
export type lesson_problemOptionalAttributes = "id" | "lesson_problem_content_id" | "lesson_test_problem_id";
export type lesson_problemCreationAttributes = Optional<lesson_problemAttributes, lesson_problemOptionalAttributes>;

export class lesson_problem extends Model<lesson_problemAttributes, lesson_problemCreationAttributes> implements lesson_problemAttributes {
  id!: number;
  lesson_problem_type_id!: number;
  lesson_problem_content_id?: number;
  lesson_test_problem_id?: number;

  // lesson_problem hasMany lessons via lesson_problem_id
  lessons!: lessons[];
  getLessons!: Sequelize.HasManyGetAssociationsMixin<lessons>;
  setLessons!: Sequelize.HasManySetAssociationsMixin<lessons, lessonsId>;
  addLesson!: Sequelize.HasManyAddAssociationMixin<lessons, lessonsId>;
  addLessons!: Sequelize.HasManyAddAssociationsMixin<lessons, lessonsId>;
  createLesson!: Sequelize.HasManyCreateAssociationMixin<lessons>;
  removeLesson!: Sequelize.HasManyRemoveAssociationMixin<lessons, lessonsId>;
  removeLessons!: Sequelize.HasManyRemoveAssociationsMixin<lessons, lessonsId>;
  hasLesson!: Sequelize.HasManyHasAssociationMixin<lessons, lessonsId>;
  hasLessons!: Sequelize.HasManyHasAssociationsMixin<lessons, lessonsId>;
  countLessons!: Sequelize.HasManyCountAssociationsMixin;
  // lesson_problem belongsTo lesson_problem_type via lesson_problem_type_id
  lesson_problem_type!: lesson_problem_type;
  getLesson_problem_type!: Sequelize.BelongsToGetAssociationMixin<lesson_problem_type>;
  setLesson_problem_type!: Sequelize.BelongsToSetAssociationMixin<lesson_problem_type, lesson_problem_typeId>;
  createLesson_problem_type!: Sequelize.BelongsToCreateAssociationMixin<lesson_problem_type>;
  // lesson_problem belongsTo lesson_standart_problem_content via lesson_problem_content_id
  lesson_problem_content!: lesson_standart_problem_content;
  getLesson_problem_content!: Sequelize.BelongsToGetAssociationMixin<lesson_standart_problem_content>;
  setLesson_problem_content!: Sequelize.BelongsToSetAssociationMixin<lesson_standart_problem_content, lesson_standart_problem_contentId>;
  createLesson_problem_content!: Sequelize.BelongsToCreateAssociationMixin<lesson_standart_problem_content>;
  // lesson_problem belongsTo lesson_test_problem via lesson_test_problem_id
  lesson_test_problem!: lesson_test_problem;
  getLesson_test_problem!: Sequelize.BelongsToGetAssociationMixin<lesson_test_problem>;
  setLesson_test_problem!: Sequelize.BelongsToSetAssociationMixin<lesson_test_problem, lesson_test_problemId>;
  createLesson_test_problem!: Sequelize.BelongsToCreateAssociationMixin<lesson_test_problem>;

  static initModel(sequelize: Sequelize.Sequelize): typeof lesson_problem {
    return lesson_problem.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lesson_problem_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'lesson_problem_type',
        key: 'id'
      }
    },
    lesson_problem_content_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lesson_standart_problem_content',
        key: 'id'
      }
    },
    lesson_test_problem_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lesson_test_problem',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'lesson_problem',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "lesson_problem_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
