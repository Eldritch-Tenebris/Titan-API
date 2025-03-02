# 🚀 Titan API - API RESTful com Node.js e TypeScript

Uma API RESTful robusta e escalável construída com Node.js e TypeScript, focada em boas práticas de desenvolvimento e padrões de projeto modernos.

## 💡 Sobre o Projeto

Este projeto serve como um boilerplate para APIs RESTful, incluindo as seguintes funcionalidades:

- Arquitetura em camadas (Controllers, Services, Models)
- Autenticação segura com JWT
- Tratamento de erros centralizado
- Validação de dados
- Testes automatizados
- Documentação automática
- Logging e monitoramento
- Segurança aprimorada

## 🗉 Índice

- [🏷️ Funcionalidades](#-funcionalidades)
- [🛠️ Stack Tecnológico](#-stack-tecnologico)
- [🚀 Começando](#-comecando)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🛡️ API Endpoints](#-api-endpoints)
- [🔒 Segurança](#-seguranca)
- [🧬 Testes](#-testes)
- [📈 Monitoramento](#-monitoramento)
- [🚀 Deploy](#-deploy)

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
- Validação de e-mail

### 📊 Recursos Adicionais
- Rate limiting
- Logs estruturados
- Cache com Redis
- Compressão de resposta
- CORS configurável
- Sanitização de entrada
- Paginação de resultados

## 🛠️ Stack Tecnológico

### 🛠️ Core
- Node.js (v18+)
- TypeScript 4.x
- Express.js
- PostgreSQL
- Redis

### 📚 Principais Bibliotecas
```json
{
  "dependencies": {
    "express": "^4.18.2",
    "typescript": "^4.9.5",
    "sequelize": "^6.29.3",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",
    "express-validator": "^7.0.1",
    "swagger-ui-express": "^5.0.0",
    "winston": "^3.8.2",
    "cors": "^2.8.5",
    "helmet": "^5.1.0",
    "compression": "^1.7.4",
    "morgan": "^1.10.0"
  }
}
```

## 🚀 Começando

### Pré-requisitos
```bash
node -v  # v18.x ou superior
npm -v   # 8.x ou superior
```

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/titan-api.git
cd titan-api
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

## 📝 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 👥 Autor

João Pedro S. - [Eldritch Tenebris](https://github.com/Eldritch-Tenebris)

## 🎉 Agradecimentos

- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)
- [JWT](https://jwt.io/)
