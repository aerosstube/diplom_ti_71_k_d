"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.initModels = exports.weekdays = exports.users = exports.user_devices = exports.two_our_class = exports.token = exports.teachers = exports.teacher_has_group = exports.students = exports.schedule_has_mark = exports.schedule = exports.questions = exports.question_type = exports.marks = exports.lessons = exports.lesson_test_problem = exports.lesson_standart_problem_content = exports.lesson_problem_type = exports.lesson_problem = exports.invite_codes = exports.groups = exports.audiences = exports.answers = void 0;
const answers_1 = require("./answers");
Object.defineProperty(exports, "answers", {
    enumerable: true, get: function () {
        return answers_1.answers;
    }
});
const audiences_1 = require("./audiences");
Object.defineProperty(exports, "audiences", {
    enumerable: true, get: function () {
        return audiences_1.audiences;
    }
});
const groups_1 = require("./groups");
Object.defineProperty(exports, "groups", {
    enumerable: true, get: function () {
        return groups_1.groups;
    }
});
const invite_codes_1 = require("./invite_codes");
Object.defineProperty(exports, "invite_codes", {
    enumerable: true, get: function () {
        return invite_codes_1.invite_codes;
    }
});
const lesson_problem_1 = require("./lesson_problem");
Object.defineProperty(exports, "lesson_problem", {
    enumerable: true, get: function () {
        return lesson_problem_1.lesson_problem;
    }
});
const lesson_problem_type_1 = require("./lesson_problem_type");
Object.defineProperty(exports, "lesson_problem_type", {
    enumerable: true, get: function () {
        return lesson_problem_type_1.lesson_problem_type;
    }
});
const lesson_standart_problem_content_1 = require("./lesson_standart_problem_content");
Object.defineProperty(exports, "lesson_standart_problem_content", {
    enumerable: true, get: function () {
        return lesson_standart_problem_content_1.lesson_standart_problem_content;
    }
});
const lesson_test_problem_1 = require("./lesson_test_problem");
Object.defineProperty(exports, "lesson_test_problem", {
    enumerable: true, get: function () {
        return lesson_test_problem_1.lesson_test_problem;
    }
});
const lessons_1 = require("./lessons");
Object.defineProperty(exports, "lessons", {
    enumerable: true, get: function () {
        return lessons_1.lessons;
    }
});
const marks_1 = require("./marks");
Object.defineProperty(exports, "marks", {
    enumerable: true, get: function () {
        return marks_1.marks;
    }
});
const question_type_1 = require("./question_type");
Object.defineProperty(exports, "question_type", {
    enumerable: true, get: function () {
        return question_type_1.question_type;
    }
});
const questions_1 = require("./questions");
Object.defineProperty(exports, "questions", {
    enumerable: true, get: function () {
        return questions_1.questions;
    }
});
const schedule_1 = require("./schedule");
Object.defineProperty(exports, "schedule", {
    enumerable: true, get: function () {
        return schedule_1.schedule;
    }
});
const schedule_has_mark_1 = require("./schedule_has_mark");
Object.defineProperty(exports, "schedule_has_mark", {
    enumerable: true, get: function () {
        return schedule_has_mark_1.schedule_has_mark;
    }
});
const students_1 = require("./students");
Object.defineProperty(exports, "students", {
    enumerable: true, get: function () {
        return students_1.students;
    }
});
const teacher_has_group_1 = require("./teacher_has_group");
Object.defineProperty(exports, "teacher_has_group", {
    enumerable: true, get: function () {
        return teacher_has_group_1.teacher_has_group;
    }
});
const teachers_1 = require("./teachers");
Object.defineProperty(exports, "teachers", {
    enumerable: true, get: function () {
        return teachers_1.teachers;
    }
});
const token_1 = require("./token");
Object.defineProperty(exports, "token", {
    enumerable: true, get: function () {
        return token_1.token;
    }
});
const two_our_class_1 = require("./two_our_class");
Object.defineProperty(exports, "two_our_class", {
    enumerable: true, get: function () {
        return two_our_class_1.two_our_class;
    }
});
const user_devices_1 = require("./user_devices");
Object.defineProperty(exports, "user_devices", {
    enumerable: true, get: function () {
        return user_devices_1.user_devices;
    }
});
const users_1 = require("./users");
Object.defineProperty(exports, "users", {
    enumerable: true, get: function () {
        return users_1.users;
    }
});
const weekdays_1 = require("./weekdays");
Object.defineProperty(exports, "weekdays", {
    enumerable: true, get: function () {
        return weekdays_1.weekdays;
    }
});

function initModels(sequelize) {
    const answers = answers_1.answers.initModel(sequelize);
    const audiences = audiences_1.audiences.initModel(sequelize);
    const groups = groups_1.groups.initModel(sequelize);
    const invite_codes = invite_codes_1.invite_codes.initModel(sequelize);
    const lesson_problem = lesson_problem_1.lesson_problem.initModel(sequelize);
    const lesson_problem_type = lesson_problem_type_1.lesson_problem_type.initModel(sequelize);
    const lesson_standart_problem_content = lesson_standart_problem_content_1.lesson_standart_problem_content.initModel(sequelize);
    const lesson_test_problem = lesson_test_problem_1.lesson_test_problem.initModel(sequelize);
    const lessons = lessons_1.lessons.initModel(sequelize);
    const marks = marks_1.marks.initModel(sequelize);
    const question_type = question_type_1.question_type.initModel(sequelize);
    const questions = questions_1.questions.initModel(sequelize);
    const schedule = schedule_1.schedule.initModel(sequelize);
    const schedule_has_mark = schedule_has_mark_1.schedule_has_mark.initModel(sequelize);
    const students = students_1.students.initModel(sequelize);
    const teacher_has_group = teacher_has_group_1.teacher_has_group.initModel(sequelize);
    const teachers = teachers_1.teachers.initModel(sequelize);
    const token = token_1.token.initModel(sequelize);
    const two_our_class = two_our_class_1.two_our_class.initModel(sequelize);
    const user_devices = user_devices_1.user_devices.initModel(sequelize);
    const users = users_1.users.initModel(sequelize);
    const weekdays = weekdays_1.weekdays.initModel(sequelize);
    schedule.belongsTo(audiences, {as: 'audience', foreignKey: 'audience_id'});
    audiences.hasMany(schedule, {as: 'schedules', foreignKey: 'audience_id'});
    schedule.belongsTo(groups, {as: 'group', foreignKey: 'group_id'});
    groups.hasMany(schedule, {as: 'schedules', foreignKey: 'group_id'});
    students.belongsTo(groups, {as: 'group', foreignKey: 'group_id'});
    groups.hasMany(students, {as: 'students', foreignKey: 'group_id'});
    teacher_has_group.belongsTo(groups, {as: 'group', foreignKey: 'group_id'});
    groups.hasMany(teacher_has_group, {as: 'teacher_has_groups', foreignKey: 'group_id'});
    lessons.belongsTo(lesson_problem, {as: 'lesson_problem', foreignKey: 'lesson_problem_id'});
    lesson_problem.hasMany(lessons, {as: 'lessons', foreignKey: 'lesson_problem_id'});
    lesson_problem.belongsTo(lesson_problem_type, {as: 'lesson_problem_type', foreignKey: 'lesson_problem_type_id'});
    lesson_problem_type.hasMany(lesson_problem, {as: 'lesson_problems', foreignKey: 'lesson_problem_type_id'});
    lesson_problem.belongsTo(lesson_standart_problem_content, {
        as: 'lesson_problem_content',
        foreignKey: 'lesson_problem_content_id'
    });
    lesson_standart_problem_content.hasMany(lesson_problem, {
        as: 'lesson_problems',
        foreignKey: 'lesson_problem_content_id'
    });
    lesson_problem.belongsTo(lesson_test_problem, {as: 'lesson_test_problem', foreignKey: 'lesson_test_problem_id'});
    lesson_test_problem.hasMany(lesson_problem, {as: 'lesson_problems', foreignKey: 'lesson_test_problem_id'});
    schedule.belongsTo(lessons, {as: 'lesson', foreignKey: 'lesson_id'});
    lessons.hasMany(schedule, {as: 'schedules', foreignKey: 'lesson_id'});
    schedule_has_mark.belongsTo(marks, {as: 'mark', foreignKey: 'mark_id'});
    marks.hasMany(schedule_has_mark, {as: 'schedule_has_marks', foreignKey: 'mark_id'});
    answers.belongsTo(questions, {as: 'question', foreignKey: 'question_id'});
    questions.hasMany(answers, {as: 'answers', foreignKey: 'question_id'});
    schedule_has_mark.belongsTo(schedule, {as: 'schedule', foreignKey: 'schedule_id'});
    schedule.hasMany(schedule_has_mark, {as: 'schedule_has_marks', foreignKey: 'schedule_id'});
    schedule_has_mark.belongsTo(students, {as: 'student', foreignKey: 'student_id'});
    students.hasMany(schedule_has_mark, {as: 'schedule_has_marks', foreignKey: 'student_id'});
    schedule.belongsTo(teachers, {as: 'teacher', foreignKey: 'teacher_id'});
    teachers.hasMany(schedule, {as: 'schedules', foreignKey: 'teacher_id'});
    teacher_has_group.belongsTo(teachers, {as: 'teacher', foreignKey: 'teacher_id'});
    teachers.hasMany(teacher_has_group, {as: 'teacher_has_groups', foreignKey: 'teacher_id'});
    lessons.belongsTo(two_our_class, {as: 'two_our_class', foreignKey: 'two_our_class_id'});
    two_our_class.hasMany(lessons, {as: 'lessons', foreignKey: 'two_our_class_id'});
    schedule.belongsTo(two_our_class, {as: 'two_our_class', foreignKey: 'two_our_class_id'});
    two_our_class.hasMany(schedule, {as: 'schedules', foreignKey: 'two_our_class_id'});
    marks.belongsTo(users, {as: 'user', foreignKey: 'user_id'});
    users.hasMany(marks, {as: 'marks', foreignKey: 'user_id'});
    students.belongsTo(users, {as: 'user', foreignKey: 'user_id'});
    users.hasMany(students, {as: 'students', foreignKey: 'user_id'});
    teachers.belongsTo(users, {as: 'user', foreignKey: 'user_id'});
    users.hasOne(teachers, {as: 'teacher', foreignKey: 'user_id'});
    token.belongsTo(users, {as: 'user', foreignKey: 'user_id'});
    users.hasMany(token, {as: 'tokens', foreignKey: 'user_id'});
    schedule.belongsTo(weekdays, {as: 'weekday', foreignKey: 'weekday_id'});
    weekdays.hasMany(schedule, {as: 'schedules', foreignKey: 'weekday_id'});
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
        schedule_has_mark: schedule_has_mark,
        students: students,
        teacher_has_group: teacher_has_group,
        teachers: teachers,
        token: token,
        two_our_class: two_our_class,
        user_devices: user_devices,
        users: users,
        weekdays: weekdays,
    };
}

exports.initModels = initModels;
