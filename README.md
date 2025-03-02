# 🚀 API RESTful com Node.js e TypeScript

Uma API RESTful robusta e escalável construída com Node.js e TypeScript, focada em boas práticas de desenvolvimento e padrões de projeto modernos.

## 💡 Sobre o Projeto

Esta API foi desenvolvida para servir como um boilerplate completo para aplicações RESTful, implementando:

- Arquitetura em camadas (Controllers, Services, Models)
- Autenticação segura com JWT
- Tratamento de erros centralizado
- Validação de dados
- Testes automatizados
- Documentação automática
- Logging e monitoramento
- Segurança aprimorada

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológico](#-stack-tecnológico)
- [Começando](#-começando)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Segurança](#-segurança)
- [Testes](#-testes)
- [Deploy](#-deploy)

## ✨ Funcionalidades

### 🔐 Autenticação e Autorização
- Login JWT com refresh token
- Proteção de rotas
- Níveis de acesso
- Logout com invalidação de token

### 👤 Gerenciamento de Usuários
- CRUD completo
- Upload de avatar
- Recuperação de senha
- Validação de email

### 📊 Features Adicionais
- Rate limiting
- Logs estruturados
- Cache com Redis
- Compressão de resposta
- CORS configurável
- Validação de dados
- Sanitização de entrada
- Paginação de resultados

## 🛠 Stack Tecnológico

### 🔧 Core
- Node.js (v14+)
- TypeScript 4.x
- Express.js
- PostgreSQL
- Redis

### 📚 Principais Bibliotecas
```json
{
  "dependencies": {
    "express": "^4.17.1",
    "typescript": "^4.5.4",
    "sequelize": "^6.6.5",
    "jsonwebtoken": "^8.5.1",
    "bcryptjs": "^2.4.3",
    "express-validator": "^6.12.1",
    "swagger-ui-express": "^4.1.6",
    "winston": "^3.3.3",
    "cors": "^2.8.5",
    "helmet": "^4.6.0",
    "compression": "^1.7.4",
    "morgan": "^1.10.0"
  }
}
```

## 🚀 Começando

### Pré-requisitos

```bash
node -v  # v14.x ou superior
npm -v   # 6.x ou superior
```

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/api-rest-typescript.git
cd api-rest-typescript
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o ambiente:
```bash
cp .env.example .env
```

4. Prepare o banco de dados:
```bash
npm run db:create
npm run db:migrate
npm run db:seed
```

5. Inicie o servidor:
```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
src/
├── config/               # Configurações
│   ├── database.ts      # Config do banco
│   ├── cache.ts         # Config do Redis
│   └── logger.ts        # Config de logs
├── controllers/         # Controllers da API
├── services/           # Lógica de negócio
├── models/             # Modelos do banco
├── middlewares/        # Middlewares Express
├── routes/             # Rotas da API
├── utils/              # Utilitários
├── validators/         # Validadores
└── types/              # Tipos TypeScript
```

## 🔗 API Endpoints

### 🔐 Autenticação
```
POST   /api/auth/register     - Registro
POST   /api/auth/login        - Login
POST   /api/auth/refresh      - Refresh token
POST   /api/auth/logout       - Logout
POST   /api/auth/forgot       - Esqueci senha
POST   /api/auth/reset       - Reset senha
```

### 👤 Usuários
```
GET    /api/users            - Lista usuários
GET    /api/users/:id        - Obtém usuário
PUT    /api/users/:id        - Atualiza usuário
DELETE /api/users/:id        - Remove usuário
PATCH  /api/users/:id/avatar - Upload avatar
```

## 🔒 Segurança

- Proteção contra:
  - XSS
  - CSRF
  - SQL Injection
  - NoSQL Injection
  - Brute Force
  - Rate Limiting
  - Parameter Pollution

## 🧪 Testes

```bash
# Testes unitários
npm run test:unit

# Testes de integração
npm run test:integration

# Todos os testes com cobertura
npm run test:coverage
```

## 📊 Monitoramento

- Winston para logs
- Morgan para HTTP logging
- Sentry para error tracking
- Prometheus + Grafana (opcional)

## 🚀 Deploy

Suporte para múltiplos ambientes:

```bash
# Desenvolvimento
npm run dev

# Homologação
npm run staging

# Produção
npm start
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 👥 Autor

João Pedro S. - [Eldritch Tenebris](https://github.com/Eldritch-Tenebris)

## 🎉 Agradecimentos

- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
