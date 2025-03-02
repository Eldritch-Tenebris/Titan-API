// src/services/index.ts

import { User, UserAttributes, UserInput } from '../models/User';

export class UserService {
    async createUser(data: UserInput): Promise<UserAttributes> {
        const user = await User.create(data);
        return user.toJSON();
    }

    async getUserById(id: number): Promise<UserAttributes | null> {
        const user = await User.findByPk(id);
        return user?.toJSON() || null;
    }

    async updateUser(id: number, data: Partial<UserInput>): Promise<UserAttributes | null> {
        const user = await User.findByPk(id);
        if (!user) return null;
        
        await user.update(data);
        return user.toJSON();
    }

    async deleteUser(id: number): Promise<boolean> {
        const deleted = await User.destroy({ where: { id } });
        return deleted > 0;
    }

    async getAllUsers(): Promise<UserAttributes[]> {
        const users = await User.findAll();
        return users.map(user => user.toJSON());
    }

    async getUserByEmail(email: string): Promise<UserAttributes | null> {
        const user = await User.findOne({ where: { email } });
        return user?.toJSON() || null;
    }
}

export default UserService;