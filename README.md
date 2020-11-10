# Cadastro de Usuários em NestJS e GraphQL

### Instalando o Nest globalmente.
```
npm install -g @nestjs/cli
```

### Criar uma aplicação
```
nest new nome
```

### Integrando Nest com TypeORM e Postgres
```
npm install --save @nestjs/typeorm typeorm pg
```

### GraphQL
```
npm i @nestjs/graphql graphql-tools graphql

npm i @nestjs/graphql graphql-tools graphql apollo-server-express
```

### Criar o módulo user
```
nest g module user
```

### Criar o service user
```
nest g service user
```

### Criar o resolver user
```
nest g r user
```

### Instalação da validação
```
npm install class-validator

npm install class-transformer
```

### Testar aplicação no playground
```
npm run start dev

http://localhost:3000/graphql
```

### Criação de um usuário:
```
mutation{
    createUser(
      data: {
        name: "Nina Silva"
        email: "nina@gmail.com"
        
      }
    ) {
     id
    name
    email
  }
}
```
### Listar todos usuários:
```
{
  users{
    id
    name
    email
  }
}
```
### Buscar usuário pelo id:
```
{
  user(
    id: "1"
  ) {
    id
    name
    email
  }
}
```
### Atualizar usuário pelo id:
```
mutation{
  updateUser(
    id: "1"
    data:  {
      name: "Jair Santos "
      email: "jair@gmail.com"
    }
  ) {
     id
    name
    email
  }
}
```
### Excluir usuário pelo id:
```
mutation{
  deleteUser(
    id: "2") 
}
```