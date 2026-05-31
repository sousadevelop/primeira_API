# Primeira API

## Overview

Educational REST API for managing people, levels, classes, and enrollments.

## Purpose

This technical portfolio project documents the implemented workflow and its current boundaries without changing application behavior.

## Stack

JavaScript, Node.js, Express, Sequelize, MySQL

## Architecture

The repository keeps its existing application structure. Use the architecture diagram as the entry point for understanding the implemented components.

See the [architecture diagram](../../assets/diagrams/architecture.mmd).

## Installation

```bash
cd aula_20_04_2022
npm install
npx sequelize db:migrate
```

## Local Run

```bash
cd aula_20_04_2022
node api/index.js
```

## Expected Environment Variables

DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT

Use [.env.example](../../.env.example) as a placeholder reference only.

## Folder Structure

The repository keeps its existing application structure. Use the architecture diagram as the entry point for understanding the implemented components.

## Screenshots

Reviewed screenshots belong in [assets/screenshots/](../../assets/screenshots/).

## Limitations

This is an educational portfolio project. Review the security notes and roadmap before considering deployment.

## Next Steps

See the [roadmap](../../ROADMAP.md).

## Security and Contributing

Read [SECURITY.md](../../SECURITY.md) and [CONTRIBUTING.md](../../CONTRIBUTING.md).
