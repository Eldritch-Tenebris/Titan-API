import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Interface para extender o tipo Request
interface AuthRequest extends Request {
    user?: any; // Você pode definir uma interface mais específica para o usuário
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token inválido.' });
    }
};

export default authMiddleware;