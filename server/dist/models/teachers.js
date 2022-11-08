"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.teachers = void 0;
const sequelize_1 = require("sequelize");

class teachers extends sequelize_1.Model {
    static initModel(sequelize) {
        return teachers.init({
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                },
                unique: 'group_teachers_user_id_key'
            },
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: 'teachers_id_key'
            }
        }, {
            sequelize,
            tableName: 'teachers',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "group_teachers_user_id_key",
                    unique: true,
                    fields: [
                        {name: "user_id"},
                    ]
                },
                {
                    name: "teachers_id_key",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
                {
                    name: "teachers_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.teachers = teachers;
