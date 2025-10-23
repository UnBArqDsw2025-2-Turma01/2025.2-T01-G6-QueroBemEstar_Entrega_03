# Arq Quero Bem-Estar

Uma aplicação backend desenvolvida em **TypeScript** com **Express** e **TypeORM**, seguindo os princípios de **arquitetura limpa** e bem definida. O projeto implementa **parcialmente** a feature de criação de competições relacionados a bem-estar.

## 📋 Sobre o Projeto

Este projeto implementa uma arquitetura em camadas com separação clara de responsabilidades:

- **Domain**: Entidades e interfaces de negócio
- **Application**: Casos de uso e protocolos
- **Infrastructure**: Implementações de banco de dados e conexões
- **Presentation**: Controllers, errors handlers e helpers
- **Main**: Configuração da aplicação e rotas

### Características

✅ TypeScript com tipagem forte
✅ Arquitetura em camadas (Clean Architecture)
✅ Express como framework web
✅ TypeORM para ORM
✅ MySQL como banco de dados
✅ Testes com Jest
✅ Linting com ESLint
✅ Formatação com Prettier
✅ Docker Compose para banco de dados
✅ Git hooks com Husky

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- **Node.js** (v18 ou superior)
- **npm** ou **yarn**
- **Docker** e **Docker Compose** (para o banco de dados)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Arturhk05/arq-quero-bem-estar.git
cd arq-quero-bem-estar
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o banco de dados com Docker:

```bash
npm run up
```

Isso iniciará um contêiner MySQL com as configurações:

- **Banco**: `quero_bem_estar`
- **Usuário**: `user`
- **Senha**: `password`
- **Porta**: `3306`

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto (opcional, existem valores padrão):

```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=user
DB_PASSWORD=password
DB_NAME=quero_bem_estar
```

### Rodando o Projeto

#### Desenvolvimento

```bash
npm run start:dev
```

O servidor iniciará com nodemon, recarregando automaticamente ao detectar mudanças nos arquivos TypeScript.

#### Produção

Primeiro, compile o projeto:

```bash
npm run build
```

Depois, inicie o servidor:

```bash
npm start
```

O servidor estará disponível em: `http://localhost:3000`

## 📝 Scripts Disponíveis

| Comando              | Descrição                                           |
| -------------------- | --------------------------------------------------- |
| `npm run start`      | Inicia o servidor em produção (requer build)        |
| `npm run start:dev`  | Inicia o servidor em desenvolvimento com hot-reload |
| `npm run build`      | Compila TypeScript                                  |
| `npm test`           | Executa os testes                                   |
| `npm run test:watch` | Executa testes em modo watch                        |
| `npm run test:push`  | Executa testes com cobertura                        |
| `npm run up`         | Inicia os containers Docker                         |
| `npm run down`       | Para os containers Docker                           |
| `npm run prepare`    | Configura os hooks do Git                           |

## 📚 Estrutura do Projeto

```
src/
├── domain/               # Lógica de negócio
│   ├── entities/         # Entidades do domínio
│   └── usecases/         # Interfaces de casos de uso
├── application/          # Casos de uso e protocolos
│   ├── protocols/        # Interfaces de contrato
│   └── usecases/         # Implementação dos casos de uso
├── infra/                # Infraestrutura
│   └── database/         # Conexões e repositórios
│       └── typeorm/      # Implementações TypeORM
├── presentation/         # Apresentação
│   ├── controllers/      # Controllers
│   ├── errors/           # Custom errors
│   ├── helper/           # Helpers
│   └── protocols/        # Protocolos da camada
└── main/                 # Configuração principal
    ├── adapters/         # Adaptadores (Express)
    ├── config/           # Configurações
    ├── factories/        # Factory Pattern
    └── routes/           # Definição de rotas
```

## 🧪 Testes

Executar testes:

```bash
npm test
```

Executar testes em modo watch:

```bash
npm run test:watch
```

Gerar relatório de cobertura:

```bash
npm run test:push
```

O relatório de cobertura estará disponível em `coverage/lcov-report/index.html`

## 🐳 Docker

### Iniciar banco de dados

```bash
npm run up
```

### Parar banco de dados

```bash
npm run down
```

As configurações do Docker estão em `docker-compose.yml`:

- **Container**: `quero-bem-estar-mysql`
- **Imagem**: MySQL 8.0
- **Volume**: `mysql-data` (persistência de dados)

## 🔄 Git Hooks

O projeto usa Husky para git hooks e lint-staged para verificações pré-commit:

- Linting automático antes de commits
- Testes relacionados são executados em stage

## 🛠️ Tecnologias

- Node.js
- TypeScript
- Express
- TypeORM
- MySQL
- Docker & Docker Compose
- Jest
- ESLint & Prettier

## 🎨 Padrões de Projeto Implementados

### **1. Singleton Pattern**

Utilizado em `TypeOrmConnection` para garantir uma única instância da conexão com o banco de dados durante toda a aplicação.

```typescript
export class TypeOrmConnection {
  private static instance: TypeOrmConnection
  private dataSource: DataSource | null = null

  private readonly host: string
  private readonly port: number
  private readonly username: string
  private readonly password: string
  private readonly database: string

  private constructor(options: TypeOrmConnectionOptions) {
    this.host = options.host
    this.port = options.port
    this.username = options.username
    this.password = options.password
    this.database = options.database
  }

  public static getInstance(): TypeOrmConnection {
    if (!TypeOrmConnection.instance) {
      TypeOrmConnection.instance = new TypeOrmConnection({
        host: env.db_host,
        port: env.db_port,
        username: env.db_user,
        password: env.db_password,
        database: env.db_name,
      })
    }
    return TypeOrmConnection.instance
  }

  public async initialize(): Promise<void> {
    if (this.dataSource && this.dataSource.isInitialized) {
      return
    }

    this.dataSource = new DataSource({
      type: "mysql",
      host: this.host,
      port: this.port,
      username: this.username,
      password: this.password,
      database: this.database,
      synchronize: process.env.NODE_ENV !== "production",
      logging: process.env.NODE_ENV === "development",
      entities: [`${__dirname}/models/*.{ts,js}`],
      migrations: [`${__dirname}/migrations/*.{ts,js}`],
    })

    await this.dataSource.initialize()
    console.log("Database connection initialized")
  }

  public getDataSource(): DataSource {
    if (!this.dataSource || !this.dataSource.isInitialized) {
      throw new Error("DataSource is not initialized")
    }
    return this.dataSource
  }

  public async disconnect(): Promise<void> {
    if (this.dataSource && this.dataSource.isInitialized) {
      await this.dataSource.destroy()
      this.dataSource = null
    }
  }
}
```

### **2. Factory Pattern**

Implementado em `src/main/factories/` para criar instâncias de controllers com suas respectivas dependências.

```typescript
export const makeCreateCompetitionController = () => {
  const competitionRepository = new CompetitionRepository()
  const usecase = new CreateCompetitionUseCase(competitionRepository)
  const controller = new CreateCompetitionController(usecase)
  return controller
}
```

### **3. Repository Pattern**

Implementado em `src/infra/database/` para abstrair a lógica de acesso a dados, permitindo facilmente trocar de ORM.

```typescript
class CompetitionRepository implements ICreateCompetitionRepository
```

### **4. Adapter Pattern**

Implementado em `src/main/adapters/express-route-adapter.ts` para adaptar o Express às necessidades da aplicação.

### **5. Composite Pattern**

Implementado em `src/validation/validators/validation-composite.ts` para compor múltiplos validadores em um único objeto, permitindo a execução sequencial de validações.

```typescript
export class ValidationComposite implements Validation {
  constructor(private readonly validations: Validation[]) {}

  validate(input: any): Error | null {
    for (const validation of this.validations) {
      const error = validation.validate(input)
      if (error) {
        return error
      }
    }
    return null
  }
}
```

**Exemplo de Uso:**

```typescript
export const makeCreateCompetitionValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ["name", "durationInDays"]) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new NumberValidation("durationInDays"))
  return new ValidationComposite(validations)
}
```

## Documentação de Endpoints

### **Create Competition**

Cria uma nova competição no sistema.

**Request:**

```http
POST http://localhost:3000/api/competitions
Content-Type: application/json

{
  "name": "any_name",
  "durationInDays": 10
}
```

**Parâmetros:**
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `name` | string | ✅ Sim | Nome da competição |
| `durationInDays` | number | ✅ Sim | Duração da competição em dias |
| `description` | string | ❌ Não | Descrição opcional da competição |

**Respostas:**

**Sucesso (200):**

```json
{
  "name": "any_name",
  "startDate": "2025-10-23T21:29:24.385Z",
  "durationInDays": 10,
  "invitationCode": "WWV464",
  "status": "ongoing",
  "ownerId": 1,
  "createdAt": "2025-10-23T21:29:24.385Z",
  "updatedAt": "2025-10-23T21:29:24.385Z"
}
```

**Erro - Parâmetro ausente (400):**

```json
{
  "error": "Missing param: name"
}
```

## �👥 Participações

### **Artur Krauspenhar** [@Arturhk05](https://github.com/Arturhk05)

- Arquitetura geral do projeto
- Configuração inicial com TypeScript, Express e TypeORM
- Setup do banco de dados com MySQL e Docker
- Organização das camadas (Domain, Application, Infrastructure, Presentation)
- Implementação do singleton TypeOrmConnection
- Implementação do composite ValidationComposite

### **Marco Marques** [marcomarquesdc](https://github.com/marcomarquesdc)

- Criar a entidade Competition do domínio
- Implementação do singleton TypeOrmConnection

### **Mylena Trindade** [MylenaTrindade](https://github.com/MylenaTrindade)

- Configuração de cobertura de testes com Jest
- Implementação do singleton TypeOrmConnection

### **Yago Amim** [yagoas](https://github.com/yagoas)

- Desenvolvimento dos Erros Customizados
- Implementação do singleton TypeOrmConnection
