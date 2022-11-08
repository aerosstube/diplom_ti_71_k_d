"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.question_type = void 0;
const sequelize_1 = require("sequelize");

class question_type extends sequelize_1.Model {
    static initModel(sequelize) {
        return question_type.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: "question_type_id_key"
            },
            type: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'question_type',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "question_type_id_key",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
                {
                    name: "question_type_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.question_type = question_type;
