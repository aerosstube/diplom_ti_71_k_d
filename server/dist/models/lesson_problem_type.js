"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.lesson_problem_type = void 0;
const sequelize_1 = require("sequelize");

class lesson_problem_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return lesson_problem_type.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: "lesson_problem_type_id_key"
            },
            name: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'lesson_problem_type',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "lesson_problem_type_id_key",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
                {
                    name: "lesson_problem_type_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.lesson_problem_type = lesson_problem_type;
