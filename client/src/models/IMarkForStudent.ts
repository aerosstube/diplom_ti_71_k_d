export interface IMarkForStudent {
    mark: string,
    classId: number,
    date: string,
    two_our_class: {
        name: string
    }
}

export interface IMarkForStudentResponse {
    marks: IMarkForStudent[]
}