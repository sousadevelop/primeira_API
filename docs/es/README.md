# Primeira API

## Descripción general

API REST educativa para gestionar personas, niveles, clases y matrículas.

## Objetivo

Este proyecto de portafolio técnico documenta el flujo implementado y sus límites actuales sin modificar el comportamiento de la aplicación.

## Stack

JavaScript, Node.js, Express, Sequelize, MySQL

## Arquitectura

El repositorio conserva su estructura de aplicación existente. Use el diagrama de arquitectura como punto de entrada para comprender los componentes implementados.

See the [architecture diagram](../../assets/diagrams/architecture.mmd).

## Instalación

```bash
cd aula_20_04_2022
npm install
npx sequelize db:migrate
```

## Ejecución local

```bash
cd aula_20_04_2022
node api/index.js
```

## Variables de entorno esperadas

DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT

Use [.env.example](../../.env.example) as a placeholder reference only.

## Estructura de carpetas

El repositorio conserva su estructura de aplicación existente. Use el diagrama de arquitectura como punto de entrada para comprender los componentes implementados.

## Capturas de pantalla

Reviewed screenshots belong in [assets/screenshots/](../../assets/screenshots/).

## Limitaciones

Este es un proyecto educativo de portafolio. Revise las notas de seguridad y el roadmap antes de considerar un despliegue.

## Próximos pasos

See the [roadmap](../../ROADMAP.md).

## Seguridad y contribución

Read [SECURITY.md](../../SECURITY.md) and [CONTRIBUTING.md](../../CONTRIBUTING.md).
