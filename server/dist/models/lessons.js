"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.lessons = void 0;
const sequelize_1 = require("sequelize");

class lessons extends sequelize_1.Model {
    static initModel(sequelize) {
        return lessons.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            minutes: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            two_our_class_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'two_our_class',
                    key: 'id'
                }
            },
            lesson_problem_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'lesson_problem',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'lessons',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "lessons_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.lessons = lessons;
