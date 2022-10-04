import {users} from "../../../models/users";
import {UserDatabaseService} from "./user.database.service";
import {Transaction} from "sequelize";

export interface User {
    id: number;
    login: string;
    password: string;
    first_name: string;
    second_name: string;
    middle_name?: string;
    date_birthday: string;
    mobile_phone?: string;
    e_mail?: string;
}

export class UserService {
    public static async createUser(userData: User, transaction: Transaction) {
        const user: users = await UserDatabaseService.createUser(userData, transaction);
        return await UserDatabaseService.showUser(user.id, transaction);
    }
}