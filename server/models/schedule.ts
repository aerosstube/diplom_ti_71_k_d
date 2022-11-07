import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {audiences, audiencesId} from './audiences';
import type {groups, groupsId} from './groups';
import type {lessons, lessonsId} from './lessons';
import type {schedule_has_mark, schedule_has_markId} from './schedule_has_mark';
import type {teachers, teachersId} from './teachers';
import type {two_our_class, two_our_classId} from './two_our_class';
import type {weekdays, weekdaysId} from './weekdays';

export interface scheduleAttributes {
  id: number;
  start_time: Date;
  group_id: number;
  weekday_id: number;
  audience_id: number;
  two_our_class_id: number;
  teacher_id: number;
  date_of_class: Date;
  lesson_id?: number;
  homework?: string;
}

export type schedulePk = "id";
export type scheduleId = schedule[schedulePk];
export type scheduleOptionalAttributes = 'id' | 'lesson_id' | 'homework';
export type scheduleCreationAttributes = Optional<scheduleAttributes, scheduleOptionalAttributes>;

export class schedule extends Model<scheduleAttributes, scheduleCreationAttributes> implements scheduleAttributes {
  id!: number;
  start_time!: Date;
  group_id!: number;
  weekday_id!: number;
  audience_id!: number;
  two_our_class_id!: number;
  teacher_id!: number;
  date_of_class!: Date;
  lesson_id?: number;
  homework?: string;

  // schedule belongsTo audiences via audience_id
  audience!: audiences;
  getAudience!: Sequelize.BelongsToGetAssociationMixin<audiences>;
  setAudience!: Sequelize.BelongsToSetAssociationMixin<audiences, audiencesId>;
  createAudience!: Sequelize.BelongsToCreateAssociationMixin<audiences>;
  // schedule belongsTo groups via group_id
  group!: groups;
  getGroup!: Sequelize.BelongsToGetAssociationMixin<groups>;
  setGroup!: Sequelize.BelongsToSetAssociationMixin<groups, groupsId>;
  createGroup!: Sequelize.BelongsToCreateAssociationMixin<groups>;
  // schedule belongsTo lessons via lesson_id
  lesson!: lessons;
  getLesson!: Sequelize.BelongsToGetAssociationMixin<lessons>;
  setLesson!: Sequelize.BelongsToSetAssociationMixin<lessons, lessonsId>;
  createLesson!: Sequelize.BelongsToCreateAssociationMixin<lessons>;
  // schedule hasMany schedule_has_mark via schedule_id
  schedule_has_marks!: schedule_has_mark[];
  getSchedule_has_marks!: Sequelize.HasManyGetAssociationsMixin<schedule_has_mark>;
  setSchedule_has_marks!: Sequelize.HasManySetAssociationsMixin<schedule_has_mark, schedule_has_markId>;
  addSchedule_has_mark!: Sequelize.HasManyAddAssociationMixin<schedule_has_mark, schedule_has_markId>;
  addSchedule_has_marks!: Sequelize.HasManyAddAssociationsMixin<schedule_has_mark, schedule_has_markId>;
  createSchedule_has_mark!: Sequelize.HasManyCreateAssociationMixin<schedule_has_mark>;
  removeSchedule_has_mark!: Sequelize.HasManyRemoveAssociationMixin<schedule_has_mark, schedule_has_markId>;
  removeSchedule_has_marks!: Sequelize.HasManyRemoveAssociationsMixin<schedule_has_mark, schedule_has_markId>;
  hasSchedule_has_mark!: Sequelize.HasManyHasAssociationMixin<schedule_has_mark, schedule_has_markId>;
  hasSchedule_has_marks!: Sequelize.HasManyHasAssociationsMixin<schedule_has_mark, schedule_has_markId>;
  countSchedule_has_marks!: Sequelize.HasManyCountAssociationsMixin;
  // schedule belongsTo teachers via teacher_id
  teacher!: teachers;
  getTeacher!: Sequelize.BelongsToGetAssociationMixin<teachers>;
  setTeacher!: Sequelize.BelongsToSetAssociationMixin<teachers, teachersId>;
  createTeacher!: Sequelize.BelongsToCreateAssociationMixin<teachers>;
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
      type: DataTypes.DATE,
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
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teachers',
        key: 'user_id'
      }
    },
      date_of_class: {
        type: DataTypes.DATE,
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
      homework: {
        type: DataTypes.STRING(4096),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'schedule',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'schedule_pkey',
          unique: true,
          fields: [
            {name: 'id'},
        ]
      },
    ]
  });
  }
}
