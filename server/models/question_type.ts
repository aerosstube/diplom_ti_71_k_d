import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface question_typeAttributes {
  id: number;
  type: string;
}

export type question_typePk = "id";
export type question_typeId = question_type[question_typePk];
export type question_typeOptionalAttributes = "id";
export type question_typeCreationAttributes = Optional<question_typeAttributes, question_typeOptionalAttributes>;

export class question_type extends Model<question_typeAttributes, question_typeCreationAttributes> implements question_typeAttributes {
  id!: number;
  type!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof question_type {
    return question_type.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: "question_type_id_key"
    },
    type: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'question_type',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "question_type_id_key",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "question_type_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
