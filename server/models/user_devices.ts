import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface user_devicesAttributes {
  id: number;
  user_agent: string;
  device_ip: string;
}

export type user_devicesPk = "id";
export type user_devicesId = user_devices[user_devicesPk];
export type user_devicesOptionalAttributes = "id";
export type user_devicesCreationAttributes = Optional<user_devicesAttributes, user_devicesOptionalAttributes>;

export class user_devices extends Model<user_devicesAttributes, user_devicesCreationAttributes> implements user_devicesAttributes {
  id!: number;
  user_agent!: string;
  device_ip!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof user_devices {
    return user_devices.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_agent: {
      type: DataTypes.STRING(2048),
      allowNull: false
    },
    device_ip: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_devices',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_devices_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
