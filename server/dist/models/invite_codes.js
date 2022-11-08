"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.invite_codes = void 0;
const sequelize_1 = require("sequelize");

class invite_codes extends sequelize_1.Model {
    static initModel(sequelize) {
        return invite_codes.init({
            id: {
                autoIncrement: true,
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique: "invite_codes_id_key"
            },
            group_name: {
                type: sequelize_1.DataTypes.STRING(256),
                allowNull: false
            },
            invite_code: {
                type: sequelize_1.DataTypes.STRING(32),
                allowNull: false
            },
            is_teacher: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'invite_codes',
            schema: 'public',
            timestamps: false,
            indexes: [
                {
                    name: "invite_codes_id_key",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
                {
                    name: "invite_codes_pkey",
                    unique: true,
                    fields: [
                        {name: "id"},
                    ]
                },
            ]
        });
    }
}

exports.invite_codes = invite_codes;
