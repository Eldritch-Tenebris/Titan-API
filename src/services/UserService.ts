import { User } from '../models/User';
import bcrypt from 'bcrypt';
import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import ApiError from '../utils/ApiError';

// Interface para o payload do token
interface TokenPayload {
    id: number;
}

export interface UserInput {
    username: string;
    email: string;
    password: string;
}

export class UserService {
    async findById(id: number) {
        const user = await User.findByPk(id, {
            attributes: { exclude: ['password'] }
        });

        if (!user) {
            throw ApiError.notFound('Usuário não encontrado');
        }

        return user.toJSON();
    }

    async create(data: UserInput) {
        // Verifica se já existe um usuário com o mesmo email
        const existingUser = await User.findOne({
            where: { email: data.email }
        });

        if (existingUser) {
            throw ApiError.badRequest('Email já está em uso');
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(data.password, 10);

        // Cria o usuário
        const user = await User.create({
            ...data,
            password: hashedPassword
        });

        // Remove a senha do objeto retornado
        const { password, ...userWithoutPassword } = user.toJSON();
        return userWithoutPassword;
    }

    async findAll() {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });
        return users.map(user => user.toJSON());
    }

    async update(id: number, data: Partial<UserInput>) {
        const user = await User.findByPk(id);

        if (!user) {
            throw ApiError.notFound('Usuário não encontrado');
        }

        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        await user.update(data);
        const { password, ...userWithoutPassword } = user.toJSON();
        return userWithoutPassword;
    }

    async delete(id: number): Promise<void> {
        const user = await User.findByPk(id);

        if (!user) {
            throw ApiError.notFound('Usuário não encontrado');
        }

        await user.destroy();
    }

    public async authenticate(email: string, password: string): Promise<string> {
        const user = await User.findOne({ where: { email } });
        
        if (!user) {
            throw ApiError.unauthorized('Credenciais inválidas');
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        
        if (!isValidPassword) {
            throw ApiError.unauthorized('Credenciais inválidas');
        }

        const payload: TokenPayload = { id: user.id };
        const secret: Secret = process.env.JWT_SECRET || 'secret';
        
        // Convertendo o tempo de expiração para número em segundos
        const expiresIn = process.env.JWT_EXPIRES_IN ? 
            parseInt(process.env.JWT_EXPIRES_IN) : 
            3600; // 1 hora em segundos

        const options: SignOptions = { expiresIn };

        const token = jwt.sign(payload, secret, options);

        return token;
    }
}