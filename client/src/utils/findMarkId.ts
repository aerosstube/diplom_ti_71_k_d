import {IBDMarks} from "../models/IBDMarks";

export function findMarkId(marks: IBDMarks | undefined, date: string) {
    let res = 0;
    marks && marks.student_marks.data.map((student) => {
        for (const mark of student.marks) {
            if (date === mark.date) {
                res = mark.id;
            }
        }
    })
    return res
}