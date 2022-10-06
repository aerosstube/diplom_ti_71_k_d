import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {groups, groupsId} from './groups';

export interface courses_has_groupsAttributes {
  group_id: number;
  course_id: number;
  id: number;
}

export type courses_has_groupsPk = 'id';
export type courses_has_groupsId = courses_has_groups[courses_has_groupsPk];
export type courses_has_groupsOptionalAttributes = 'id';
export type courses_has_groupsCreationAttributes = Optional<courses_has_groupsAttributes, courses_has_groupsOptionalAttributes>;

export class courses_has_groups extends Model<courses_has_groupsAttributes, courses_has_groupsCreationAttributes> implements courses_has_groupsAttributes {
  group_id!: number;
  course_id!: number;
  id!: number;

  // courses_has_groups belongsTo groups via group_id
  group!: groups;
  getGroup!: Sequelize.BelongsToGetAssociationMixin<groups>;
  setGroup!: Sequelize.BelongsToSetAssociationMixin<groups, groupsId>;
  createGroup!: Sequelize.BelongsToCreateAssociationMixin<groups>;

  static initModel(sequelize: Sequelize.Sequelize): typeof courses_has_groups {
    return courses_has_groups.init({
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'groups',
          key: 'id'
        }
      },
      course_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: 'courses_has_groups_id_key'
      }
    }, {
      sequelize,
      tableName: 'courses_has_groups',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'courses_has_groups_id_key',
          unique: true,
          fields: [
            {name: 'id'},
          ]
        },
        {
          name: 'courses_has_groups_pkey',
          unique: true,
          fields: [
            {name: 'id'},
          ]
        },
      ]
    });
  }
}
