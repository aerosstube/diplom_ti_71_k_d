import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { lesson_problem, lesson_problemId } from './lesson_problem';

export interface lesson_problem_typeAttributes {
  id: number;
  name: string;
}

export type lesson_problem_typePk = "id";
export type lesson_problem_typeId = lesson_problem_type[lesson_problem_typePk];
export type lesson_problem_typeOptionalAttributes = "id";
export type lesson_problem_typeCreationAttributes = Optional<lesson_problem_typeAttributes, lesson_problem_typeOptionalAttributes>;

export class lesson_problem_type extends Model<lesson_problem_typeAttributes, lesson_problem_typeCreationAttributes> implements lesson_problem_typeAttributes {
  id!: number;
  name!: string;

  // lesson_problem_type hasMany lesson_problem via lesson_problem_type_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof lesson_problem_type {
    return lesson_problem_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "lesson_problem_type_id_key"
    },
    name: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'lesson_problem_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "lesson_problem_type_id_key",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "lesson_problem_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
