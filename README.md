# Primeira API em Node.JS

This project implements a RESTful API using Node.js and Express.js, leveraging Sequelize as an ORM for MySQL database interactions. It follows the MVC (Model-View-Controller) architectural pattern and provides full CRUD (Create, Read, Update, Delete) functionality for managing `Pessoas` (People), `Niveis` (Levels), `Turmas` (Classes), and `Matriculas` (Enrollments).

## Key Features

*   **RESTful API Design**: Exposes endpoints for interacting with core entities.
*   **CRUD Operations**: Full Create, Read, Update, and Delete capabilities for `Pessoas`, `Niveis`, `Turmas`, and `Matriculas`.
*   **Database Automation with Sequelize**: Utilizes Sequelize ORM for defining models, managing migrations, and interacting with the database.
*   **MySQL Database Integration**: Configured to connect with a MySQL database.
*   **MVC Architectural Pattern**: Organizes code into Models (data structure), Views (API responses), and Controllers (business logic).
*   **Entity Relationships**: Defines relationships between `Pessoas`, `Niveis`, `Turmas`, and `Matriculas` (e.g., a `Pessoa` can have many `Matriculas`).

## Tech Stack

*   **Language**: JavaScript
*   **Runtime**: Node.js
*   **Web Framework**: Express.js
*   **ORM (Object-Relational Mapper)**: Sequelize
*   **Database**: MySQL

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js**: Version 14 or higher. You can download it from [nodejs.org](https://nodejs.org/).
*   **npm**: Node Package Manager, which comes with Node.js.
*   **MySQL Server**: A running instance of MySQL.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/sousadevelop/primeira_API.git
    cd primeira_API/aula_20_04_2022
    ```

2.  **Install dependencies**:
    Navigate to the `aula_20_04_2022` directory and install the required Node.js packages.
    ```bash
    npm install
    ```

3.  **Database Setup**:
    *   **Create Database**: Create a new MySQL database. The default configuration expects a database named `escola_ingles`.
        ```sql
        CREATE DATABASE escola_ingles;
        ```
    *   **Configure Database Credentials**:
        Open `api/config/config.json` and update the `development` section with your MySQL username and password if they differ from the defaults (`root` and `Jesusteamo22@`).
        ```json
        {
          "development": {
            "username": "your_mysql_username",
            "password": "your_mysql_password",
            "database": "escola_ingles",
            "host": "127.0.0.1",
            "dialect": "mysql"
          },
          // ... other environments
        }
        ```
        **Note**: The provided `config.json` contains a hardcoded password for the `development` environment. For production deployments, it's highly recommended to use environment variables for sensitive information.
    *   **Run Migrations**: Apply the database schema migrations using Sequelize CLI.
        ```bash
        npx sequelize db:migrate
        ```
        This command will create the `Pessoas`, `Niveis`, `Turmas`, and `Matriculas` tables in your `escola_ingles` database.

## Usage Guide

To start the API server, navigate to the `aula_20_04_2022` directory and run:

```bash
node api/index.js
```

The server will start and listen on port `3000`. You should see a message in your console:
```
O servidor está funcionando 
na porta 3000 
```

The API will now be accessible at `http://localhost:3000`.

## Architecture Overview

The project follows a modified MVC (Model-View-Controller) pattern, common in Node.js RESTful APIs:

*   **`api/index.js`**: The main entry point of the application. It initializes the Express.js server and loads the defined routes.
*   **`api/routes/index.js` (Inferred)**: This file (though not provided in the context, its existence is implied by `routes(app)` in `api/index.js`) is responsible for defining all API endpoints and mapping them to the appropriate controller methods.
*   **`api/controllers/`**: Contains the business logic for handling incoming HTTP requests. Each controller (`NivelController.js`, `PessoaController.js`, `TurmaController.js`) is responsible for processing requests related to its specific resource, interacting with the database models, and sending back JSON responses.
*   **`api/models/`**: Defines the database schemas and relationships using Sequelize.
    *   `api/models/index.js`: Sets up the Sequelize instance and dynamically loads all other model definitions.
    *   `api/models/*.js`: Each file represents a database table (e.g., `pessoas.js`, `niveis.js`) and defines its attributes and associations with other models.
*   **`api/migrations/`**: Manages database schema changes. Each file (`*.js`) defines `up` (to apply a change) and `down` (to revert a change) methods for creating or modifying tables.
*   **`api/config/config.json`**: Stores database connection configurations for different environments (development, test, production).

## API Reference

The API provides CRUD operations for `Pessoas`, `Niveis`, `Turmas`, and `Matriculas`.
**Base URL**: `http://localhost:3000`

**Note**: The exact routing structure is inferred based on common RESTful practices and the controller methods, as the `api/routes/index.js` file was not provided.

### Pessoas (People)

Manages information about people, who can be students or instructors.

*   **`GET /pessoas`**
    *   **Description**: Retrieves a list of all people.
    *   **Response**: `200 OK` with an array of person objects.
    ```json
    [
      { "id": 1, "nome": "João Silva", "ativo": true, "email": "joao@example.com", "role": "estudante", "createdAt": "...", "updatedAt": "..." },
      // ...
    ]
    ```

*   **`GET /pessoas/:id`**
    *   **Description**: Retrieves a single person by ID.
    *   **Parameters**: `id` (path) - The ID of the person.
    *   **Response**: `200 OK` with a person object.
    ```json
    { "id": 1, "nome": "João Silva", "ativo": true, "email": "joao@example.com", "role": "estudante", "createdAt": "...", "updatedAt": "..." }
    ```

*   **`POST /pessoas`**
    *   **Description**: Creates a new person.
    *   **Request Body**:
        ```json
        {
          "nome": "Maria Souza",
          "ativo": true,
          "email": "maria@example.com",
          "role": "docente"
        }
        ```
    *   **Response**: `200 OK` with the newly created person object.

*   **`PUT /pessoas/:id`**
    *   **Description**: Updates an existing person by ID.
    *   **Parameters**: `id` (path) - The ID of the person to update.
    *   **Request Body**: (Partial or full person object)
        ```json
        {
          "nome": "Maria Oliveira",
          "ativo": false
        }
        ```
    *   **Response**: `200 OK` with the updated person object.

*   **`DELETE /pessoas/:id`**
    *   **Description**: Deletes a person by ID.
    *   **Parameters**: `id` (path) - The ID of the person to delete.
    *   **Response**: `200 OK` with a success message.
    ```json
    { "mensagem": "id 1 foi apagado!!!" }
    ```

### Niveis (Levels)

Manages different levels of classes (e.g., "Basic", "Intermediate").

*   **`GET /niveis`**
    *   **Description**: Retrieves a list of all levels.
    *   **Response**: `200 OK` with an array of level objects.
    ```json
    [
      { "id": 1, "descr_nivel": "básico", "createdAt": "...", "updatedAt": "..." },
      // ...
    ]
    ```

*   **`GET /niveis/:id`**
    *   **Description**: Retrieves a single level by ID.
    *   **Parameters**: `id` (path) - The ID of the level.
    *   **Response**: `200 OK` with a level object.
    ```json
    { "id": 1, "descr_nivel": "básico", "createdAt": "...", "updatedAt": "..." }
    ```

*   **`POST /niveis`**
    *   **Description**: Creates a new level.
    *   **Request Body**:
        ```json
        {
          "descr_nivel": "avançado"
        }
        ```
    *   **Response**: `200 OK` with the newly created level object.

*   **`PUT /niveis/:id`**
    *   **Description**: Updates an existing level by ID.
    *   **Parameters**: `id` (path) - The ID of the level to update.
    *   **Request Body**:
        ```json
        {
          "descr_nivel": "intermediário"
        }
        ```
    *   **Response**: `200 OK` with the updated level object.

*   **`DELETE /niveis/:id`**
    *   **Description**: Deletes a level by ID.
    *   **Parameters**: `id` (path) - The ID of the level to delete.
    *   **Response**: `200 OK` with a success message.
    ```json
    { "mensagem": "id 1 foi deletado!!" }
    ```

### Turmas (Classes)

Manages information about classes, including their start date, assigned instructor, and level.

*   **`GET /turmas`**
    *   **Description**: Retrieves a list of all classes.
    *   **Response**: `200 OK` with an array of class objects.
    ```json
    [
      { "id": 1, "data_inicio": "2023-01-15", "docente_id": 2, "nivel_id": 1, "createdAt": "...", "updatedAt": "..." },
      // ...
    ]
    ```

*   **`GET /turmas/:id`**
    *   **Description**: Retrieves a single class by ID.
    *   **Parameters**: `id` (path) - The ID of the class.
    *   **Response**: `200 OK` with a class object.
    ```json
    { "id": 1, "data_inicio": "2023-01-15", "docente_id": 2, "nivel_id": 1, "createdAt": "...", "updatedAt": "..." }
    ```

*   **`POST /turmas`**
    *   **Description**: Creates a new class.
    *   **Request Body**:
        ```json
        {
          "data_inicio": "2023-03-01",
          "docente_id": 2,
          "nivel_id": 2
        }
        ```
    *   **Response**: `200 OK` with the newly created class object.

*   **`PUT /turmas/:id`**
    *   **Description**: Updates an existing class by ID.
    *   **Parameters**: `id` (path) - The ID of the class to update.
    *   **Request Body**:
        ```json
        {
          "data_inicio": "2023-03-15"
        }
        ```
    *   **Response**: `200 OK` with the updated class object.

*   **`DELETE /turmas/:id`**
    *   **Description**: Deletes a class by ID.
    *   **Parameters**: `id` (path) - The ID of the class to delete.
    *   **Response**: `200 OK` with a success message.
    ```json
    { "mensagem": "id 1 foi deletado!!" }
    ```

### Matriculas (Enrollments)

Manages student enrollments in classes, nested under the `Pessoas` resource.

*   **`GET /pessoas/:estudanteId/matricula/:matriculaId`**
    *   **Description**: Retrieves a specific enrollment for a given student.
    *   **Parameters**:
        *   `estudanteId` (path) - The ID of the student.
        *   `matriculaId` (path) - The ID of the enrollment.
    *   **Response**: `200 OK` with an enrollment object.
    ```json
    { "id": 1, "status": "confirmado", "estudante_id": 1, "turma_id": 1, "createdAt": "...", "updatedAt": "..." }
    ```

*   **`POST /pessoas/:estudanteId/matricula`**
    *   **Description**: Creates a new enrollment for a student.
    *   **Parameters**: `estudanteId` (path) - The ID of the student.
    *   **Request Body**:
        ```json
        {
          "status": "confirmado",
          "turma_id": 1
        }
        ```
    *   **Response**: `200 OK` with the newly created enrollment object.

*   **`PUT /pessoas/:estudanteId/matricula/:matriculaId`**
    *   **Description**: Updates an existing enrollment for a student.
    *   **Parameters**:
        *   `estudanteId` (path) - The ID of the student.
        *   `matriculaId` (path) - The ID of the enrollment to update.
    *   **Request Body**:
        ```json
        {
          "status": "cancelado"
        }
        ```
    *   **Response**: `200 OK` with the updated enrollment object.

*   **`DELETE /pessoas/:estudanteId/matricula/:matriculaId`**
    *   **Description**: Deletes an enrollment for a student.
    *   **Parameters**:
        *   `estudanteId` (path) - The ID of the student.
        *   `matriculaId` (path) - The ID of the enrollment to delete.
    *   **Response**: `200 OK` with a success message.
    ```json
    { "mensagem": "Matriculaid 1 foi apagado!!!" }
    ```
