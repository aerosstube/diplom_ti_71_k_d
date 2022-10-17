import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {audiences, audiencesId} from './audiences';
import type {group_teachers, group_teachersId} from './group_teachers';
import type {groups, groupsId} from './groups';
import type {lessons, lessonsId} from './lessons';
import type {marks, marksId} from './marks';
import type {two_our_class, two_our_classId} from './two_our_class';
import type {weekdays, weekdaysId} from './weekdays';

export interface scheduleAttributes {
  id: number;
  start_time: string;
  group_id: number;
  weekday_id: number;
  audience_id: number;
  two_our_class_id: number;
  group_teacher_id: number;
  end_time: string;
  teacher_id: number;
  date_of_class: string;
  lesson_id?: number;
  mark_id: number;
}

export type schedulePk = "id";
export type scheduleId = schedule[schedulePk];
export type scheduleOptionalAttributes = "id" | "lesson_id";
export type scheduleCreationAttributes = Optional<scheduleAttributes, scheduleOptionalAttributes>;

export class schedule extends Model<scheduleAttributes, scheduleCreationAttributes> implements scheduleAttributes {
  id!: number;
  start_time!: string;
  group_id!: number;
  weekday_id!: number;
  audience_id!: number;
  two_our_class_id!: number;
  group_teacher_id!: number;
  end_time!: string;
  teacher_id!: number;
  date_of_class!: string;
  lesson_id?: number;
  mark_id!: number;

  // schedule belongsTo audiences via audience_id
  audience!: audiences;
  getAudience!: Sequelize.BelongsToGetAssociationMixin<audiences>;
  setAudience!: Sequelize.BelongsToSetAssociationMixin<audiences, audiencesId>;
  createAudience!: Sequelize.BelongsToCreateAssociationMixin<audiences>;
  // schedule belongsTo group_teachers via teacher_id
  teacher!: group_teachers;
  getTeacher!: Sequelize.BelongsToGetAssociationMixin<group_teachers>;
  setTeacher!: Sequelize.BelongsToSetAssociationMixin<group_teachers, group_teachersId>;
  createTeacher!: Sequelize.BelongsToCreateAssociationMixin<group_teachers>;
  // schedule belongsTo groups via group_id
  group!: groups;
  getGroup!: Sequelize.BelongsToGetAssociationMixin<groups>;
  setGroup!: Sequelize.BelongsToSetAssociationMixin<groups, groupsId>;
  createGroup!: Sequelize.BelongsToCreateAssociationMixin<groups>;
  // schedule belongsTo groups via group_teacher_id
  group_teacher!: groups;
  getGroup_teacher!: Sequelize.BelongsToGetAssociationMixin<groups>;
  setGroup_teacher!: Sequelize.BelongsToSetAssociationMixin<groups, groupsId>;
  createGroup_teacher!: Sequelize.BelongsToCreateAssociationMixin<groups>;
  // schedule belongsTo lessons via lesson_id
  lesson!: lessons;
  getLesson!: Sequelize.BelongsToGetAssociationMixin<lessons>;
  setLesson!: Sequelize.BelongsToSetAssociationMixin<lessons, lessonsId>;
  createLesson!: Sequelize.BelongsToCreateAssociationMixin<lessons>;
  // schedule belongsTo marks via mark_id
  mark!: marks;
  getMark!: Sequelize.BelongsToGetAssociationMixin<marks>;
  setMark!: Sequelize.BelongsToSetAssociationMixin<marks, marksId>;
  createMark!: Sequelize.BelongsToCreateAssociationMixin<marks>;
  // schedule belongsTo two_our_class via two_our_class_id
  two_our_class!: two_our_class;
  getTwo_our_class!: Sequelize.BelongsToGetAssociationMixin<two_our_class>;
  setTwo_our_class!: Sequelize.BelongsToSetAssociationMixin<two_our_class, two_our_classId>;
  createTwo_our_class!: Sequelize.BelongsToCreateAssociationMixin<two_our_class>;
  // schedule belongsTo weekdays via weekday_id
  weekday!: weekdays;
  getWeekday!: Sequelize.BelongsToGetAssociationMixin<weekdays>;
  setWeekday!: Sequelize.BelongsToSetAssociationMixin<weekdays, weekdaysId>;
  createWeekday!: Sequelize.BelongsToCreateAssociationMixin<weekdays>;

  static initModel(sequelize: Sequelize.Sequelize): typeof schedule {
    return schedule.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_time: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'id'
      }
    },
    weekday_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'weekdays',
        key: 'id'
      }
    },
    audience_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'audiences',
        key: 'id'
      }
    },
    two_our_class_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'two_our_class',
        key: 'id'
      }
    },
    group_teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'groups',
        key: 'id'
      }
    },
    end_time: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'group_teachers',
        key: 'user_id'
      }
    },
    date_of_class: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    lesson_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'lessons',
        key: 'id'
      }
    },
    mark_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marks',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'schedule',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "schedule_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
