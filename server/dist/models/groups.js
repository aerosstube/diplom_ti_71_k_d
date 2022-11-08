"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.groups = void 0;
const sequelize_1 = require("sequelize");

class groups extends sequelize_1.Model {
    static initModel(sequelize) {
        return groups.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'groups',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: 'groups_pkey',
                    unique: true,
                    fields: [
                        {name: 'id'},
                    ]
                },
            ]
        });
    }
}

exports.groups = groups;
