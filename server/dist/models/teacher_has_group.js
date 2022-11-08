"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.teacher_has_group = void 0;
const sequelize_1 = require("sequelize");

class teacher_has_group extends sequelize_1.Model {
    static initModel(sequelize) {
        return teacher_has_group.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            teacher_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'teachers',
                    key: 'user_id'
                }
            },
            group_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'groups',
                    key: 'id'
                }
            }
        }, {
            sequelize,
            tableName: 'teacher_has_group',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: 'teacher_has_group_pkey',
                    unique: true,
                    fields: [
                        {name: 'id'},
                    ]
                },
            ]
        });
    }
}

exports.teacher_has_group = teacher_has_group;
