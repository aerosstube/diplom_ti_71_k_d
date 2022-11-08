"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.audiences = void 0;
const sequelize_1 = require("sequelize");

class audiences extends sequelize_1.Model {
    static initModel(sequelize) {
        return audiences.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            number_audience: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'audiences',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "audiences_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.audiences = audiences;
