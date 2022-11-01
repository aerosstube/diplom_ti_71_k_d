import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {answers, answersId} from './answers';

export interface questionsAttributes {
  id: number;
  question: string;
  question_type_id: number;
}

export type questionsPk = "id";
export type questionsId = questions[questionsPk];
export type questionsOptionalAttributes = "id";
export type questionsCreationAttributes = Optional<questionsAttributes, questionsOptionalAttributes>;

export class questions extends Model<questionsAttributes, questionsCreationAttributes> implements questionsAttributes {
  id!: number;
  question!: string;
  question_type_id!: number;

  // questions hasMany answers via question_id
  answers!: answers[];
  getAnswers!: Sequelize.HasManyGetAssociationsMixin<answers>;
  setAnswers!: Sequelize.HasManySetAssociationsMixin<answers, answersId>;
  addAnswer!: Sequelize.HasManyAddAssociationMixin<answers, answersId>;
  addAnswers!: Sequelize.HasManyAddAssociationsMixin<answers, answersId>;
  createAnswer!: Sequelize.HasManyCreateAssociationMixin<answers>;
  removeAnswer!: Sequelize.HasManyRemoveAssociationMixin<answers, answersId>;
  removeAnswers!: Sequelize.HasManyRemoveAssociationsMixin<answers, answersId>;
  hasAnswer!: Sequelize.HasManyHasAssociationMixin<answers, answersId>;
  hasAnswers!: Sequelize.HasManyHasAssociationsMixin<answers, answersId>;
  countAnswers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof questions {
    return questions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    question_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'questions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "questions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
