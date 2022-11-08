"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.two_our_class = void 0;
const sequelize_1 = require("sequelize");

class two_our_class extends sequelize_1.Model {
    static initModel(sequelize) {
        return two_our_class.init({
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
            tableName: 'two_our_class',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "two_our_class_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.two_our_class = two_our_class;
