import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {users, usersId} from './users';

export interface tokenAttributes {
  id: number;
  refresh_token: string;
  user_id: number;
  user_device_id: number;
  date_expired: Date;
}

export type tokenPk = "id";
export type tokenId = token[tokenPk];
export type tokenOptionalAttributes = "id";
export type tokenCreationAttributes = Optional<tokenAttributes, tokenOptionalAttributes>;

export class token extends Model<tokenAttributes, tokenCreationAttributes> implements tokenAttributes {
  id!: number;
  refresh_token!: string;
  user_id!: number;
  user_device_id!: number;
  date_expired!: Date;

  // token belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof token {
    return token.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    refresh_token: {
      type: DataTypes.STRING(1024),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_device_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_expired: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'token',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "token_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
