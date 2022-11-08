"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.schedule_has_mark = void 0;
const sequelize_1 = require("sequelize");

class schedule_has_mark extends sequelize_1.Model {
    static initModel(sequelize) {
        return schedule_has_mark.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            schedule_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'schedule',
                    key: 'id'
                }
            },
            mark_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'marks',
                    key: 'id'
                }
            },
            student_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'students',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'schedule_has_mark',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: 'schedule_has_mark_pkey',
                    unique: true,
                    fields: [
                        {name: 'id'},
                    ]
                },
            ]
        });
    }
}

exports.schedule_has_mark = schedule_has_mark;
