# Primeira API

## Visão Geral

API REST educacional para gestão acadêmica de pessoas, níveis, turmas e matrículas.

## Problema Resolvido

Organiza operações CRUD de um domínio acadêmico e demonstra uma arquitetura Node.js com rotas, controladores, modelos, migrações e seeders.

## Stack

JavaScript, Node.js, Express, Sequelize, MySQL

## Arquitetura

`aula_20_04_2022/api/routes`: endpoints; `controllers`: tratamento HTTP; `models`: entidades Sequelize; `migrations` e `seeders`: evolução e dados de apoio.

Consulte o [diagrama de arquitetura](../../assets/diagrams/architecture.mmd).

## Instalação

```bash
cd aula_20_04_2022
npm install
npx sequelize db:migrate
```

## Execução Local

```bash
cd aula_20_04_2022
node api/index.js
```

## Variáveis de Ambiente Esperadas

DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT

Use [.env.example](../../.env.example) apenas como referência e nunca versione valores reais.

## Estrutura de Pastas

`aula_20_04_2022/api/routes`: endpoints; `controllers`: tratamento HTTP; `models`: entidades Sequelize; `migrations` e `seeders`: evolução e dados de apoio.

## Screenshots

Adicione capturas revisadas em [assets/screenshots/](../../assets/screenshots/) sem dados sensíveis.

## Limitações

A configuração atual do Sequelize permanece em `api/config/config.json`. Há credencial com aparência sensível no histórico atual; faça rotação e migração para variáveis de ambiente em um PR separado.

## Próximos Passos

Consulte o [roadmap](../../ROADMAP.md).

## Segurança e Contribuição

Leia [SECURITY.md](../../SECURITY.md) e [CONTRIBUTING.md](../../CONTRIBUTING.md).
