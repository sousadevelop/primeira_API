# Security

## Scope

This repository is a portfolio and educational project. Do not commit real credentials, tokens, private endpoints, personal data, or production configuration.

## Environment Variables

Expected names: DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT

Use .env.example only as a placeholder reference.

## Repository Note

A configuração atual do Sequelize permanece em `api/config/config.json`. Há credencial com aparência sensível no histórico atual; faça rotação e migração para variáveis de ambiente em um PR separado.

## Reporting

Report sensitive concerns privately. Avoid exposing secrets in public issues.
