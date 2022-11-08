"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.schedule = void 0;
const sequelize_1 = require("sequelize");

class schedule extends sequelize_1.Model {
    static initModel(sequelize) {
        return schedule.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            start_time: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            group_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'groups',
                    key: 'id'
                }
            },
            weekday_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'weekdays',
                    key: 'id'
                }
            },
            audience_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'audiences',
                    key: 'id'
                }
            },
            two_our_class_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'two_our_class',
                    key: 'id'
                }
            },
            teacher_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'teachers',
                    key: 'user_id'
                }
            },
            date_of_class: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: false
            },
            lesson_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'lessons',
                    key: 'id'
                }
            },
            homework: {
                type: sequelize_1.DataTypes.STRING(4096),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'schedule',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: 'schedule_pkey',
                    unique: true,
                    fields: [
                        {name: 'id'},
                    ]
                },
            ]
        });
    }
}

exports.schedule = schedule;
