import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import sequelize from './config/database';
import ApiError from './utils/ApiError';

// Carrega as variáveis de ambiente
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/api', routes);

// Adicione um middleware para tratar rotas não encontradas
app.use('*', (req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(404, `Rota ${req.originalUrl} não encontrada`));
});

// Middleware de tratamento de erros
app.use(errorHandler);

// Conexão com o banco de dados e inicialização do servidor
sequelize.authenticate()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
        });
    })
    .catch((error: Error) => {
        console.error('❌ Erro na conexão com o banco:', error);
    });

export default app;