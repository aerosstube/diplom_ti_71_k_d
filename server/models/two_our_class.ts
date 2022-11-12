import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { schedule, scheduleId } from './schedule';

export interface two_our_classAttributes {
  id: number;
  name: string;
}

export type two_our_classPk = "id";
export type two_our_classId = two_our_class[two_our_classPk];
export type two_our_classOptionalAttributes = "id";
export type two_our_classCreationAttributes = Optional<two_our_classAttributes, two_our_classOptionalAttributes>;

export class two_our_class extends Model<two_our_classAttributes, two_our_classCreationAttributes> implements two_our_classAttributes {
  id!: number;
  name!: string;

  // two_our_class hasMany schedule via two_our_class_id
  schedules!: schedule[];
  getSchedules!: Sequelize.HasManyGetAssociationsMixin<schedule>;
  setSchedules!: Sequelize.HasManySetAssociationsMixin<schedule, scheduleId>;
  addSchedule!: Sequelize.HasManyAddAssociationMixin<schedule, scheduleId>;
  addSchedules!: Sequelize.HasManyAddAssociationsMixin<schedule, scheduleId>;
  createSchedule!: Sequelize.HasManyCreateAssociationMixin<schedule>;
  removeSchedule!: Sequelize.HasManyRemoveAssociationMixin<schedule, scheduleId>;
  removeSchedules!: Sequelize.HasManyRemoveAssociationsMixin<schedule, scheduleId>;
  hasSchedule!: Sequelize.HasManyHasAssociationMixin<schedule, scheduleId>;
  hasSchedules!: Sequelize.HasManyHasAssociationsMixin<schedule, scheduleId>;
  countSchedules!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof two_our_class {
    return two_our_class.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(256),
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
          { name: "id" },
        ]
      },
    ]
  });
  }
}
