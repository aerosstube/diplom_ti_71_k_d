"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.lesson_standart_problem_content = void 0;
const sequelize_1 = require("sequelize");

class lesson_standart_problem_content extends sequelize_1.Model {
    static initModel(sequelize) {
        return lesson_standart_problem_content.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            video_url: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: true
            },
            photo_url: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: true
            },
            context: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'lesson_standart_problem_content',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "lesson_problem_content_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.lesson_standart_problem_content = lesson_standart_problem_content;
