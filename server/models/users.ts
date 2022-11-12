import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { students, studentsId } from './students';
import type { teachers, teachersId } from './teachers';
import type { token, tokenId } from './token';

export interface usersAttributes {
  id: number;
  login: string;
  password: string;
  first_name: string;
  second_name: string;
  middle_name?: string;
  date_birthday: string;
  mobile_phone?: string;
  'e-mail'?: string;
  role: string;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id" | "middle_name" | "mobile_phone" | "e-mail" | "role";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: number;
  login!: string;
  password!: string;
  first_name!: string;
  second_name!: string;
  middle_name?: string;
  date_birthday!: string;
  mobile_phone?: string;
  'e-mail'?: string;
  role!: string;

  // users hasMany students via user_id
  students!: students[];
  getStudents!: Sequelize.HasManyGetAssociationsMixin<students>;
  setStudents!: Sequelize.HasManySetAssociationsMixin<students, studentsId>;
  addStudent!: Sequelize.HasManyAddAssociationMixin<students, studentsId>;
  addStudents!: Sequelize.HasManyAddAssociationsMixin<students, studentsId>;
  createStudent!: Sequelize.HasManyCreateAssociationMixin<students>;
  removeStudent!: Sequelize.HasManyRemoveAssociationMixin<students, studentsId>;
  removeStudents!: Sequelize.HasManyRemoveAssociationsMixin<students, studentsId>;
  hasStudent!: Sequelize.HasManyHasAssociationMixin<students, studentsId>;
  hasStudents!: Sequelize.HasManyHasAssociationsMixin<students, studentsId>;
  countStudents!: Sequelize.HasManyCountAssociationsMixin;
  // users hasOne teachers via user_id
  teacher!: teachers;
  getTeacher!: Sequelize.HasOneGetAssociationMixin<teachers>;
  setTeacher!: Sequelize.HasOneSetAssociationMixin<teachers, teachersId>;
  createTeacher!: Sequelize.HasOneCreateAssociationMixin<teachers>;
  // users hasMany token via user_id
  tokens!: token[];
  getTokens!: Sequelize.HasManyGetAssociationsMixin<token>;
  setTokens!: Sequelize.HasManySetAssociationsMixin<token, tokenId>;
  addToken!: Sequelize.HasManyAddAssociationMixin<token, tokenId>;
  addTokens!: Sequelize.HasManyAddAssociationsMixin<token, tokenId>;
  createToken!: Sequelize.HasManyCreateAssociationMixin<token>;
  removeToken!: Sequelize.HasManyRemoveAssociationMixin<token, tokenId>;
  removeTokens!: Sequelize.HasManyRemoveAssociationsMixin<token, tokenId>;
  hasToken!: Sequelize.HasManyHasAssociationMixin<token, tokenId>;
  hasTokens!: Sequelize.HasManyHasAssociationsMixin<token, tokenId>;
  countTokens!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof users {
    return users.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    login: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "users_login_key"
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    second_name: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    middle_name: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    date_birthday: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    mobile_phone: {
      type: DataTypes.STRING(32),
      allowNull: true,
      unique: 'users_mobile_phone_key'
    },
    'e-mail': {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "users_e-mail_key"
    },
    role: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "USER"
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_e-mail_key",
        unique: true,
        fields: [
          { name: "e-mail" },
        ]
      },
      {
        name: "users_login_key",
        unique: true,
        fields: [
          { name: "login" },
        ]
      },
      {
        name: "users_mobile_phone_key",
        unique: true,
        fields: [
          { name: "mobile_phone" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
