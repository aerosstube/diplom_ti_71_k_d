import type { Sequelize } from "sequelize";
import { answers as _answers } from "./answers";
import type { answersAttributes, answersCreationAttributes } from "./answers";
import { audiences as _audiences } from "./audiences";
import type { audiencesAttributes, audiencesCreationAttributes } from "./audiences";
import { groups as _groups } from "./groups";
import type { groupsAttributes, groupsCreationAttributes } from "./groups";
import { invite_codes as _invite_codes } from "./invite_codes";
import type { invite_codesAttributes, invite_codesCreationAttributes } from "./invite_codes";
import { lesson_problem as _lesson_problem } from "./lesson_problem";
import type { lesson_problemAttributes, lesson_problemCreationAttributes } from "./lesson_problem";
import { lesson_problem_type as _lesson_problem_type } from "./lesson_problem_type";
import type { lesson_problem_typeAttributes, lesson_problem_typeCreationAttributes } from "./lesson_problem_type";
import { lesson_standart_problem_content as _lesson_standart_problem_content } from "./lesson_standart_problem_content";
import type { lesson_standart_problem_contentAttributes, lesson_standart_problem_contentCreationAttributes } from "./lesson_standart_problem_content";
import { lesson_test_problem as _lesson_test_problem } from "./lesson_test_problem";
import type { lesson_test_problemAttributes, lesson_test_problemCreationAttributes } from "./lesson_test_problem";
import { lessons as _lessons } from "./lessons";
import type { lessonsAttributes, lessonsCreationAttributes } from "./lessons";
import { marks as _marks } from "./marks";
import type { marksAttributes, marksCreationAttributes } from "./marks";
import { question_type as _question_type } from "./question_type";
import type { question_typeAttributes, question_typeCreationAttributes } from "./question_type";
import { questions as _questions } from "./questions";
import type { questionsAttributes, questionsCreationAttributes } from "./questions";
import { schedule as _schedule } from "./schedule";
import type { scheduleAttributes, scheduleCreationAttributes } from "./schedule";
import { students as _students } from "./students";
import type { studentsAttributes, studentsCreationAttributes } from "./students";
import { teachers as _teachers } from "./teachers";
import type { teachersAttributes, teachersCreationAttributes } from "./teachers";
import { token as _token } from "./token";
import type { tokenAttributes, tokenCreationAttributes } from "./token";
import { two_our_class as _two_our_class } from "./two_our_class";
import type { two_our_classAttributes, two_our_classCreationAttributes } from "./two_our_class";
import { user_devices as _user_devices } from "./user_devices";
import type { user_devicesAttributes, user_devicesCreationAttributes } from "./user_devices";
import { users as _users } from "./users";
import type { usersAttributes, usersCreationAttributes } from "./users";
import { weekdays as _weekdays } from "./weekdays";
import type { weekdaysAttributes, weekdaysCreationAttributes } from "./weekdays";

export {
  _answers as answers,
  _audiences as audiences,
  _groups as groups,
  _invite_codes as invite_codes,
  _lesson_problem as lesson_problem,
  _lesson_problem_type as lesson_problem_type,
  _lesson_standart_problem_content as lesson_standart_problem_content,
  _lesson_test_problem as lesson_test_problem,
  _lessons as lessons,
  _marks as marks,
  _question_type as question_type,
  _questions as questions,
  _schedule as schedule,
  _students as students,
  _teachers as teachers,
  _token as token,
  _two_our_class as two_our_class,
  _user_devices as user_devices,
  _users as users,
  _weekdays as weekdays,
};

export type {
  answersAttributes,
  answersCreationAttributes,
  audiencesAttributes,
  audiencesCreationAttributes,
  groupsAttributes,
  groupsCreationAttributes,
  invite_codesAttributes,
  invite_codesCreationAttributes,
  lesson_problemAttributes,
  lesson_problemCreationAttributes,
  lesson_problem_typeAttributes,
  lesson_problem_typeCreationAttributes,
  lesson_standart_problem_contentAttributes,
  lesson_standart_problem_contentCreationAttributes,
  lesson_test_problemAttributes,
  lesson_test_problemCreationAttributes,
  lessonsAttributes,
  lessonsCreationAttributes,
  marksAttributes,
  marksCreationAttributes,
  question_typeAttributes,
  question_typeCreationAttributes,
  questionsAttributes,
  questionsCreationAttributes,
  scheduleAttributes,
  scheduleCreationAttributes,
  studentsAttributes,
  studentsCreationAttributes,
  teachersAttributes,
  teachersCreationAttributes,
  tokenAttributes,
  tokenCreationAttributes,
  two_our_classAttributes,
  two_our_classCreationAttributes,
  user_devicesAttributes,
  user_devicesCreationAttributes,
  usersAttributes,
  usersCreationAttributes,
  weekdaysAttributes,
  weekdaysCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const answers = _answers.initModel(sequelize);
  const audiences = _audiences.initModel(sequelize);
  const groups = _groups.initModel(sequelize);
  const invite_codes = _invite_codes.initModel(sequelize);
  const lesson_problem = _lesson_problem.initModel(sequelize);
  const lesson_problem_type = _lesson_problem_type.initModel(sequelize);
  const lesson_standart_problem_content = _lesson_standart_problem_content.initModel(sequelize);
  const lesson_test_problem = _lesson_test_problem.initModel(sequelize);
  const lessons = _lessons.initModel(sequelize);
  const marks = _marks.initModel(sequelize);
  const question_type = _question_type.initModel(sequelize);
  const questions = _questions.initModel(sequelize);
  const schedule = _schedule.initModel(sequelize);
  const students = _students.initModel(sequelize);
  const teachers = _teachers.initModel(sequelize);
  const token = _token.initModel(sequelize);
  const two_our_class = _two_our_class.initModel(sequelize);
  const user_devices = _user_devices.initModel(sequelize);
  const users = _users.initModel(sequelize);
  const weekdays = _weekdays.initModel(sequelize);

  schedule.belongsTo(audiences, { as: "audience", foreignKey: "audience_id"});
  audiences.hasMany(schedule, { as: "schedules", foreignKey: "audience_id"});
  schedule.belongsTo(groups, { as: "group", foreignKey: "group_id"});
  groups.hasMany(schedule, { as: "schedules", foreignKey: "group_id"});
  schedule.belongsTo(groups, { as: "group_teacher", foreignKey: "group_teacher_id"});
  groups.hasMany(schedule, { as: "group_teacher_schedules", foreignKey: "group_teacher_id"});
  students.belongsTo(groups, { as: "group", foreignKey: "group_id"});
  groups.hasMany(students, { as: "students", foreignKey: "group_id"});
  teachers.belongsTo(groups, { as: "group", foreignKey: "group_id"});
  groups.hasMany(teachers, { as: "teachers", foreignKey: "group_id"});
  lessons.belongsTo(lesson_problem, { as: "lesson_problem", foreignKey: "lesson_problem_id"});
  lesson_problem.hasMany(lessons, { as: "lessons", foreignKey: "lesson_problem_id"});
  lesson_problem.belongsTo(lesson_problem_type, { as: "lesson_problem_type", foreignKey: "lesson_problem_type_id"});
  lesson_problem_type.hasMany(lesson_problem, { as: "lesson_problems", foreignKey: "lesson_problem_type_id"});
  lesson_problem.belongsTo(lesson_standart_problem_content, { as: "lesson_problem_content", foreignKey: "lesson_problem_content_id"});
  lesson_standart_problem_content.hasMany(lesson_problem, { as: "lesson_problems", foreignKey: "lesson_problem_content_id"});
  lesson_problem.belongsTo(lesson_test_problem, { as: "lesson_test_problem", foreignKey: "lesson_test_problem_id"});
  lesson_test_problem.hasMany(lesson_problem, { as: "lesson_problems", foreignKey: "lesson_test_problem_id"});
  schedule.belongsTo(lessons, { as: "lesson", foreignKey: "lesson_id"});
  lessons.hasMany(schedule, { as: "schedules", foreignKey: "lesson_id"});
  schedule.belongsTo(marks, { as: "mark", foreignKey: "mark_id"});
  marks.hasMany(schedule, { as: "schedules", foreignKey: "mark_id"});
  answers.belongsTo(questions, { as: "question", foreignKey: "question_id"});
  questions.hasMany(answers, { as: "answers", foreignKey: "question_id"});
  schedule.belongsTo(teachers, { as: "teacher", foreignKey: "teacher_id"});
  teachers.hasMany(schedule, { as: "schedules", foreignKey: "teacher_id"});
  lessons.belongsTo(two_our_class, { as: "two_our_class", foreignKey: "two_our_class_id"});
  two_our_class.hasMany(lessons, { as: "lessons", foreignKey: "two_our_class_id"});
  schedule.belongsTo(two_our_class, { as: "two_our_class", foreignKey: "two_our_class_id"});
  two_our_class.hasMany(schedule, { as: "schedules", foreignKey: "two_our_class_id"});
  marks.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(marks, { as: "marks", foreignKey: "user_id"});
  students.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(students, { as: "students", foreignKey: "user_id"});
  teachers.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasOne(teachers, { as: "teacher", foreignKey: "user_id"});
  token.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(token, { as: "tokens", foreignKey: "user_id"});
  schedule.belongsTo(weekdays, { as: "weekday", foreignKey: "weekday_id"});
  weekdays.hasMany(schedule, { as: "schedules", foreignKey: "weekday_id"});

  return {
    answers: answers,
    audiences: audiences,
    groups: groups,
    invite_codes: invite_codes,
    lesson_problem: lesson_problem,
    lesson_problem_type: lesson_problem_type,
    lesson_standart_problem_content: lesson_standart_problem_content,
    lesson_test_problem: lesson_test_problem,
    lessons: lessons,
    marks: marks,
    question_type: question_type,
    questions: questions,
    schedule: schedule,
    students: students,
    teachers: teachers,
    token: token,
    two_our_class: two_our_class,
    user_devices: user_devices,
    users: users,
    weekdays: weekdays,
  };
}
