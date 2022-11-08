"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.token = void 0;
const sequelize_1 = require("sequelize");

class token extends sequelize_1.Model {
    static initModel(sequelize) {
        return token.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            refresh_token: {
                type: sequelize_1.DataTypes.STRING(1024),
                allowNull: false
            },
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            user_device_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            date_expired: {
                type: sequelize_1.DataTypes.DATE,
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
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.token = token;
