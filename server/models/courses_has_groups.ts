import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { groups, groupsId } from './groups';

export interface courses_has_groupsAttributes {
  group_id: number;
  course_id: number;
}

export type courses_has_groupsCreationAttributes = courses_has_groupsAttributes;

export class courses_has_groups extends Model<courses_has_groupsAttributes, courses_has_groupsCreationAttributes> implements courses_has_groupsAttributes {
  group_id!: number;
  course_id!: number;

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
    }
  }, {
    sequelize,
    tableName: 'courses_has_groups',
    schema: 'public',
    timestamps: false
  });
  }
}
