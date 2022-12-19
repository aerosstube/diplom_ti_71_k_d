export interface ITeacherMarks {
    id: number,
    user_id: number,
    group_id: number,
    marks: [number],
    user: {
        first_name: string,
        second_name: string,
        middle_name: string

    }
}