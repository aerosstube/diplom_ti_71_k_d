"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.lesson_problem = void 0;
const sequelize_1 = require("sequelize");

class lesson_problem extends sequelize_1.Model {
    static initModel(sequelize) {
        return lesson_problem.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            lesson_problem_type_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'lesson_problem_type',
                    key: 'id'
                }
            },
            lesson_problem_content_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'lesson_standart_problem_content',
                    key: 'id'
                }
            },
            lesson_test_problem_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'lesson_test_problem',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'lesson_problem',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "lesson_problem_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.lesson_problem = lesson_problem;
