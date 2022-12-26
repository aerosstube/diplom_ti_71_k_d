export interface IBDMarks {
    student_marks: {
        data: [
            {
                id: number,
                user_id: number,
                student_id: number,
                marks: [
                    {
                        id: number,
                        mark: string,
                        two_our_class_id: number,
                        date: string
                    }
                ],
                user: {
                    first_name: string,
                    second_name: string,
                    middle_name: string
                }
            }
        ]
    },
    classes: [
        { start_time: string }];
}