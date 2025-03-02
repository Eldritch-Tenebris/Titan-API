import { Router, Request, Response, NextFunction } from 'express';
import { UserController } from '../controllers/UserController';
import { validateUser, validateLogin, validateUserUpdate } from '../middlewares/validator';
import authMiddleware from '../middlewares/auth';
import ApiError from '../utils/ApiError';

const router = Router();
const userController = new UserController();

// Rotas públicas
router.post('/register', validateUser, (req: Request, res: Response, next: NextFunction) => 
    userController.register(req, res, next));
router.post('/login', validateLogin, (req: Request, res: Response, next: NextFunction) => 
    userController.login(req, res, next));

// Rotas protegidas
router.use(authMiddleware);

// Rotas de usuários
router.get('/users', (req: Request, res: Response, next: NextFunction) => 
    userController.getAll(req, res, next));
router.get('/users/:id', (req: Request, res: Response, next: NextFunction) => 
    userController.getById(req, res, next));
router.put('/users/:id', validateUserUpdate, (req: Request, res: Response, next: NextFunction) => 
    userController.update(req, res, next));
router.delete('/users/:id', (req: Request, res: Response, next: NextFunction) => 
    userController.delete(req, res, next));

// Rota para o usuário atual
router.get('/me', (req: Request, res: Response, next: NextFunction) => 
    userController.getCurrentUser(req, res, next));

// Handler para rotas não encontradas
router.use('*', (req, res, next) => {
    next(new ApiError(404, `Rota ${req.originalUrl} não encontrada`));
});

export default router;