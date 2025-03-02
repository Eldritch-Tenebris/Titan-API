import { User as UserModel } from './User';
import { UserAttributes } from './User';
import { UserInput } from './User';

export { UserModel, UserAttributes, UserInput };

export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface PostAttributes {
    id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
}

// Adicione outros modelos conforme necessário.