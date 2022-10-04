import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { group_students, group_studentsId } from './group_students';
import type { group_teachers, group_teachersCreationAttributes} from './group_teachers';
import type { groups, groupsId } from './groups';
import type { marks, marksId } from './marks';
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
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id" | "middle_name" | "mobile_phone" | "e-mail";
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

  // users hasMany group_students via user_id
  group_students!: group_students[];
  getGroup_students!: Sequelize.HasManyGetAssociationsMixin<group_students>;
  setGroup_students!: Sequelize.HasManySetAssociationsMixin<group_students, group_studentsId>;
  addGroup_student!: Sequelize.HasManyAddAssociationMixin<group_students, group_studentsId>;
  addGroup_students!: Sequelize.HasManyAddAssociationsMixin<group_students, group_studentsId>;
  createGroup_student!: Sequelize.HasManyCreateAssociationMixin<group_students>;
  removeGroup_student!: Sequelize.HasManyRemoveAssociationMixin<group_students, group_studentsId>;
  removeGroup_students!: Sequelize.HasManyRemoveAssociationsMixin<group_students, group_studentsId>;
  hasGroup_student!: Sequelize.HasManyHasAssociationMixin<group_students, group_studentsId>;
  hasGroup_students!: Sequelize.HasManyHasAssociationsMixin<group_students, group_studentsId>;
  countGroup_students!: Sequelize.HasManyCountAssociationsMixin;
  // users hasOne group_teachers via user_id
  group_teacher!: group_teachers;
  getGroup_teacher!: Sequelize.HasOneGetAssociationMixin<group_teachers>;
  createGroup_teacher!: Sequelize.HasOneCreateAssociationMixin<group_teachers>;
  // users hasMany groups via user_id
  groups!: groups[];
  getGroups!: Sequelize.HasManyGetAssociationsMixin<groups>;
  setGroups!: Sequelize.HasManySetAssociationsMixin<groups, groupsId>;
  addGroup!: Sequelize.HasManyAddAssociationMixin<groups, groupsId>;
  addGroups!: Sequelize.HasManyAddAssociationsMixin<groups, groupsId>;
  createGroup!: Sequelize.HasManyCreateAssociationMixin<groups>;
  removeGroup!: Sequelize.HasManyRemoveAssociationMixin<groups, groupsId>;
  removeGroups!: Sequelize.HasManyRemoveAssociationsMixin<groups, groupsId>;
  hasGroup!: Sequelize.HasManyHasAssociationMixin<groups, groupsId>;
  hasGroups!: Sequelize.HasManyHasAssociationsMixin<groups, groupsId>;
  countGroups!: Sequelize.HasManyCountAssociationsMixin;
  // users hasMany marks via user_id
  marks!: marks[];
  getMarks!: Sequelize.HasManyGetAssociationsMixin<marks>;
  setMarks!: Sequelize.HasManySetAssociationsMixin<marks, marksId>;
  addMark!: Sequelize.HasManyAddAssociationMixin<marks, marksId>;
  addMarks!: Sequelize.HasManyAddAssociationsMixin<marks, marksId>;
  createMark!: Sequelize.HasManyCreateAssociationMixin<marks>;
  removeMark!: Sequelize.HasManyRemoveAssociationMixin<marks, marksId>;
  removeMarks!: Sequelize.HasManyRemoveAssociationsMixin<marks, marksId>;
  hasMark!: Sequelize.HasManyHasAssociationMixin<marks, marksId>;
  hasMarks!: Sequelize.HasManyHasAssociationsMixin<marks, marksId>;
  countMarks!: Sequelize.HasManyCountAssociationsMixin;
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
      type: DataTypes.STRING(32),
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
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "users_mobile_phone_key"
    },
    'e-mail': {
      type: DataTypes.STRING(256),
      allowNull: true,
      unique: "users_e-mail_key"
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
