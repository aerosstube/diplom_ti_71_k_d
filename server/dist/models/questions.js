"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.questions = void 0;
const sequelize_1 = require("sequelize");

class questions extends sequelize_1.Model {
    static initModel(sequelize) {
        return questions.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            question: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            question_type_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'questions',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "questions_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.questions = questions;
