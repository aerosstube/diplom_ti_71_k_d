import {users} from "../../../models/users";

export class AuthDatabaseService {

    static async getAllUsers(): Promise<users[]> {
        console.log(users.findAll())
        return await users.findAll();
    }
}