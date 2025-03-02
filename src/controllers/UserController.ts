import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/UserService';
import ApiError from '../utils/ApiError';

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public async register(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.userService.create(req.body);
            res.status(201).json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const token = await this.userService.authenticate(email, password);
            res.json({ success: true, token });
        } catch (error) {
            next(error);
        }
    }

    public async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const users = await this.userService.findAll();
            res.json({ success: true, data: users });
        } catch (error) {
            next(error);
        }
    }

    public async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.userService.findById(parseInt(req.params.id));
            res.json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.userService.update(parseInt(req.params.id), req.body);
            res.json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    }

    public async delete(req: Request, res: Response, next: NextFunction) {
        try {
            await this.userService.delete(parseInt(req.params.id));
            res.json({ success: true, message: 'Usuário excluído com sucesso' });
        } catch (error) {
            next(error);
        }
    }

    public async getCurrentUser(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.userService.findById((req as any).user.id);
            res.json({ success: true, data: user });
        } catch (error) {
            next(error);
        }
    }
}