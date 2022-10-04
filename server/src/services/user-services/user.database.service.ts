import {User} from "./user.service";
import {Transaction} from "sequelize";
import {users} from "../../../models/users";

export class UserDatabaseService {

    public static async createUser(userData: User, transaction: Transaction): Promise<users> {
        return await users.create(
            userData,{
                transaction
            });
    }

    public static async showUser(userId: number, transaction: Transaction) {
        return await users.findOne({
            where: {
                id: userId
            }, transaction,
        });
    }
}