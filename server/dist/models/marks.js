"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.marks = void 0;
const sequelize_1 = require("sequelize");

class marks extends sequelize_1.Model {
    static initModel(sequelize) {
        return marks.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            mark: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            user_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'marks',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "marks_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.marks = marks;
