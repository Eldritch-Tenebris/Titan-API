// src/types/index.ts

export interface User {
    id: string;
    username: string;
    password: string;
    email: string;
}

export interface AuthPayload {
    userId: string;
    iat: number;
    exp: number;
}

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}

export interface CreateUserDto {
    username: string;
    password: string;
    email: string;
}

export interface UpdateUserDto {
    username?: string;
    password?: string;
    email?: string;
}