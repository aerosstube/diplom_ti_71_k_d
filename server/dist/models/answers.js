"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.answers = void 0;
const sequelize_1 = require("sequelize");

class answers extends sequelize_1.Model {
    static initModel(sequelize) {
        return answers.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            answer: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            question_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'questions',
                    key: 'id'
                }
            },
            is_right: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        }, {
            sequelize,
            tableName: 'answers',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "answers_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.answers = answers;
