// src/config/auth.ts

export const jwtConfig = {
    secret: process.env.JWT_SECRET || 'sua_chave_secreta_aqui',
    expiresIn: '1h', // Tempo de expiração do token
};