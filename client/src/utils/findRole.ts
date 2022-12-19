import {IUser} from "../models/IUser";

export function findRole(user: IUser) {
    if (user.role !== 'teacher') {
        return true;
    }
    return false
}