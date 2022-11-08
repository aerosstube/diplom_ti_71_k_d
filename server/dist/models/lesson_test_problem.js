"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.lesson_test_problem = void 0;
const sequelize_1 = require("sequelize");

class lesson_test_problem extends sequelize_1.Model {
    static initModel(sequelize) {
        return lesson_test_problem.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            question_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'lesson_test_problem',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "lesson_test_problem_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.lesson_test_problem = lesson_test_problem;
