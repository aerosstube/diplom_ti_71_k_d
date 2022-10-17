import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {questions, questionsId} from './questions';

export interface answersAttributes {
  id: number;
  answer: string;
  question_id: number;
  is_right: boolean;
}

export type answersPk = "id";
export type answersId = answers[answersPk];
export type answersOptionalAttributes = "id";
export type answersCreationAttributes = Optional<answersAttributes, answersOptionalAttributes>;

export class answers extends Model<answersAttributes, answersCreationAttributes> implements answersAttributes {
  id!: number;
  answer!: string;
  question_id!: number;
  is_right!: boolean;

  // answers belongsTo questions via question_id
  question!: questions;
  getQuestion!: Sequelize.BelongsToGetAssociationMixin<questions>;
  setQuestion!: Sequelize.BelongsToSetAssociationMixin<questions, questionsId>;
  createQuestion!: Sequelize.BelongsToCreateAssociationMixin<questions>;

  static initModel(sequelize: Sequelize.Sequelize): typeof answers {
    return answers.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    answer: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'questions',
        key: 'id'
      }
    },
    is_right: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'answers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "answers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
