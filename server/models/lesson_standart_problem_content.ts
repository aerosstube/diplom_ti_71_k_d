import * as Sequelize from 'sequelize';
import {DataTypes, Model, Optional} from 'sequelize';
import type {lesson_problem, lesson_problemId} from './lesson_problem';

export interface lesson_standart_problem_contentAttributes {
	id: number;
	video_url?: string;
	photo_url?: string;
	context: string;
}

export type lesson_standart_problem_contentPk = 'id';
export type lesson_standart_problem_contentId = lesson_standart_problem_content[lesson_standart_problem_contentPk];
export type lesson_standart_problem_contentOptionalAttributes = 'id' | 'video_url' | 'photo_url';
export type lesson_standart_problem_contentCreationAttributes = Optional<lesson_standart_problem_contentAttributes, lesson_standart_problem_contentOptionalAttributes>;

export class lesson_standart_problem_content extends Model<lesson_standart_problem_contentAttributes, lesson_standart_problem_contentCreationAttributes> implements lesson_standart_problem_contentAttributes {
	id!: number;
	video_url?: string;
	photo_url?: string;
	context!: string;

	// lesson_standart_problem_content hasMany lesson_problem via lesson_problem_content_id
	lesson_problems!: lesson_problem[];
	getLesson_problems!: Sequelize.HasManyGetAssociationsMixin<lesson_problem>;
	setLesson_problems!: Sequelize.HasManySetAssociationsMixin<lesson_problem, lesson_problemId>;
	addLesson_problem!: Sequelize.HasManyAddAssociationMixin<lesson_problem, lesson_problemId>;
	addLesson_problems!: Sequelize.HasManyAddAssociationsMixin<lesson_problem, lesson_problemId>;
	createLesson_problem!: Sequelize.HasManyCreateAssociationMixin<lesson_problem>;
	removeLesson_problem!: Sequelize.HasManyRemoveAssociationMixin<lesson_problem, lesson_problemId>;
	removeLesson_problems!: Sequelize.HasManyRemoveAssociationsMixin<lesson_problem, lesson_problemId>;
	hasLesson_problem!: Sequelize.HasManyHasAssociationMixin<lesson_problem, lesson_problemId>;
	hasLesson_problems!: Sequelize.HasManyHasAssociationsMixin<lesson_problem, lesson_problemId>;
	countLesson_problems!: Sequelize.HasManyCountAssociationsMixin;

	static initModel(sequelize: Sequelize.Sequelize): typeof lesson_standart_problem_content {
		return lesson_standart_problem_content.init({
			id: {
				autoIncrement: true,
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true
			},
			video_url: {
				type: DataTypes.STRING(256),
				allowNull: true
			},
			photo_url: {
				type: DataTypes.STRING(256),
				allowNull: true
			},
			context: {
				type: DataTypes.TEXT,
				allowNull: false
			}
		}, {
			sequelize,
			tableName: 'lesson_standart_problem_content',
			schema: 'public',
			timestamps: false,
			indexes: [
				{
					name: 'lesson_problem_content_pkey',
					unique: true,
					fields: [
						{name: 'id'},
					]
				},
			]
		});
	}
}
