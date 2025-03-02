import { Sequelize, Options } from 'sequelize';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

// Interface para tipagem das configurações
interface DatabaseConfig {
    database: string;
    username: string;
    password: string;
    host: string;
    dialect: 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql';
    port: number;
    logging: boolean;
}

// Configurações do banco de dados
const databaseConfig: DatabaseConfig = {
    database: process.env.DB_NAME!,
    username: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    host: process.env.DB_HOST!,
    dialect: (process.env.DB_DIALECT as 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql') || 'postgres',
    port: parseInt(process.env.DB_PORT || '5432'),
    logging: process.env.NODE_ENV === 'development'
};

// Opções do Sequelize
const sequelizeOptions: Options = {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
    port: databaseConfig.port,
    logging: databaseConfig.logging ? console.log : false,
    define: {
        timestamps: true,
        underscored: true,
        paranoid: true // Soft delete
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// Criação da instância do Sequelize
const sequelize = new Sequelize(
    databaseConfig.database,
    databaseConfig.username,
    databaseConfig.password,
    sequelizeOptions
);

// Testa a conexão com o banco de dados
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('❌ Erro ao conectar com o banco de dados:', error);
        process.exit(1);
    }
};

// Executa o teste de conexão
testConnection();

export default sequelize;