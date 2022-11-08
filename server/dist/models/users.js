"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.users = void 0;
const sequelize_1 = require("sequelize");

class users extends sequelize_1.Model {
    static initModel(sequelize) {
        return users.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            login: {
                type: sequelize_1.DataTypes.STRING(64),
                allowNull: false,
                unique: "users_login_key"
            },
            password: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            first_name: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            second_name: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            middle_name: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: true
            },
            date_birthday: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: false
            },
            mobile_phone: {
                type: sequelize_1.DataTypes.STRING(20),
                allowNull: true,
                unique: "users_mobile_phone_key"
            },
            'e-mail': {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: true,
                unique: "users_e-mail_key"
            },
            role: {
                type: sequelize_1.DataTypes.STRING(32),
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
                        {name: "e-mail"},
                    ]
                },
                {
                    name: "users_login_key",
                    unique: true,
                    fields: [
                        {name: "login"},
                    ]
                },
                {
                    name: "users_mobile_phone_key",
                    unique: true,
                    fields: [
                        {name: "mobile_phone"},
                    ]
                },
                {
                    name: "users_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.users = users;
