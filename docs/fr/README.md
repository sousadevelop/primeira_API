# Primeira API

## Vue d'ensemble

API REST pédagogique pour gérer les personnes, niveaux, classes et inscriptions.

## Objectif

Ce projet de portfolio technique documente le flux implémenté et ses limites actuelles sans modifier le comportement de l'application.

## Stack

JavaScript, Node.js, Express, Sequelize, MySQL

## Architecture

Le dépôt conserve sa structure applicative existante. Utilisez le diagramme d'architecture comme point d'entrée pour comprendre les composants implémentés.

See the [architecture diagram](../../assets/diagrams/architecture.mmd).

## Installation

```bash
cd aula_20_04_2022
npm install
npx sequelize db:migrate
```

## Exécution locale

```bash
cd aula_20_04_2022
node api/index.js
```

## Variables d'environnement attendues

DB_USERNAME, DB_PASSWORD, DB_DATABASE, DB_HOST, DB_DIALECT

Use [.env.example](../../.env.example) as a placeholder reference only.

## Structure des dossiers

Le dépôt conserve sa structure applicative existante. Utilisez le diagramme d'architecture comme point d'entrée pour comprendre les composants implémentés.

## Captures d'écran

Reviewed screenshots belong in [assets/screenshots/](../../assets/screenshots/).

## Limites

Il s'agit d'un projet pédagogique de portfolio. Consultez les notes de sécurité et la roadmap avant d'envisager un déploiement.

## Prochaines étapes

See the [roadmap](../../ROADMAP.md).

## Sécurité et contribution

Read [SECURITY.md](../../SECURITY.md) and [CONTRIBUTING.md](../../CONTRIBUTING.md).
