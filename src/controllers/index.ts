import { Request, Response } from 'express';

class UserController {
    public async getUsers(req: Request, res: Response): Promise<Response> {
        // Lógica para obter usuários
        return res.json({ message: 'Lista de usuários' });
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        // Lógica para criar um novo usuário
        return res.status(201).json({ message: 'Usuário criado' });
    }
}

class AuthController {
    public async login(req: Request, res: Response): Promise<Response> {
        // Lógica para autenticar o usuário
        return res.json({ message: 'Usuário autenticado' });
    }

    public async register(req: Request, res: Response): Promise<Response> {
        // Lógica para registrar um novo usuário
        return res.status(201).json({ message: 'Usuário registrado' });
    }
}

export { UserController, AuthController };