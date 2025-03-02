import dotenv from 'dotenv';
import sequelize from '../src/config/database';

// Carrega variáveis de ambiente do arquivo de teste
dotenv.config({ path: '.env.test' });

// Limpa o banco antes de cada teste
beforeEach(async () => {
  await sequelize.sync({ force: true });
});

// Fecha a conexão após todos os testes
afterAll(async () => {
  await sequelize.close();
});