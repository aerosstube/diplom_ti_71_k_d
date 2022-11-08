"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.weekdays = void 0;
const sequelize_1 = require("sequelize");

class weekdays extends sequelize_1.Model {
    static initModel(sequelize) {
        return weekdays.init({
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
            tableName: 'weekdays',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "weekdays_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.weekdays = weekdays;
