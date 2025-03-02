class ApiError extends Error {
    statusCode: number;
    errors?: any[];

    constructor(statusCode: number, message: string, errors?: any[]) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        
        // Configura o prototype corretamente
        Object.setPrototypeOf(this, ApiError.prototype);

        // Captura stack trace
        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message: string, errors?: any[]) {
        return new ApiError(400, message, errors);
    }

    static unauthorized(message: string = 'Não autorizado') {
        return new ApiError(401, message);
    }

    static forbidden(message: string = 'Acesso negado') {
        return new ApiError(403, message);
    }

    static notFound(message: string = 'Recurso não encontrado') {
        return new ApiError(404, message);
    }

    static internal(message: string = 'Erro interno do servidor') {
        return new ApiError(500, message);
    }
}

export default ApiError;