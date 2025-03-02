import { Request, Response, NextFunction } from 'express';

// Interface para erros personalizados da API
interface ApiError extends Error {
    statusCode?: number;
    errors?: any[];
}

const errorHandler = (
    err: ApiError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Erro interno do servidor';

    res.status(statusCode).json({
        success: false,
        message,
        errors: err.errors,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};

export default errorHandler;