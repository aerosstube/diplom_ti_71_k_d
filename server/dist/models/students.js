"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.students = void 0;
const sequelize_1 = require("sequelize");

class students extends sequelize_1.Model {
    static initModel(sequelize) {
        return students.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            group_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'groups',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'students',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "group_students_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.students = students;
