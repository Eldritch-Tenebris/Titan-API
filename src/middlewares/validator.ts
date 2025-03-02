import { Request, Response, NextFunction } from 'express';
import { body, validationResult, ValidationError } from 'express-validator';

// Interface para erro personalizado
interface CustomValidationError {
    field: string;
    message: string;
}

// Função auxiliar para formatar erros
const formatErrors = (errors: ValidationError[]): CustomValidationError[] => {
    return errors.map(err => ({
        field: err.type === 'field' ? err.path : 'unknown',
        message: err.msg
    }));
};

// Validação de usuário
export const validateUser = [
    body('username')
        .isString()
        .withMessage('O nome de usuário deve ser uma string')
        .notEmpty()
        .withMessage('O nome de usuário é obrigatório')
        .isLength({ min: 3, max: 50 })
        .withMessage('O nome de usuário deve ter entre 3 e 50 caracteres'),
    
    body('email')
        .isEmail()
        .withMessage('Email inválido')
        .normalizeEmail()
        .trim(),
    
    body('password')
        .isString()
        .withMessage('A senha deve ser uma string')
        .notEmpty()
        .withMessage('A senha é obrigatória')
        .isLength({ min: 6 })
        .withMessage('A senha deve ter no mínimo 6 caracteres')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/)
        .withMessage('A senha deve conter pelo menos uma letra e um número'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                errors: formatErrors(errors.array())
            });
        }
        next();
    }
];

// Validação de login
export const validateLogin = [
    body('email')
        .isEmail()
        .withMessage('Email inválido')
        .normalizeEmail()
        .trim(),
    
    body('password')
        .notEmpty()
        .withMessage('A senha é obrigatória'),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                errors: formatErrors(errors.array())
            });
        }
        next();
    }
];

// Validação de atualização de usuário
export const validateUserUpdate = [
    body('username')
        .optional()
        .isString()
        .withMessage('O nome de usuário deve ser uma string')
        .isLength({ min: 3, max: 50 })
        .withMessage('O nome de usuário deve ter entre 3 e 50 caracteres'),
    
    body('email')
        .optional()
        .isEmail()
        .withMessage('Email inválido')
        .normalizeEmail()
        .trim(),

    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                success: false,
                errors: formatErrors(errors.array())
            });
        }
        next();
    }
];