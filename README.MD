# excel-to-db

`excel-to-db` is an npm library designed to help you import data from Excel files to various databases, including MySQL, Microsoft SQL Server, PostgreSQL, MongoDB (using Mongoose), and GraphQL endpoints, using a consistent and simple API.

## Installation

To install `excel-to-db`, run:

```bash
npm install excel-to-db
```

## Features

- Supports multiple database types: MySQL, Microsoft SQL Server, PostgreSQL, MongoDB, and GraphQL.
- Reads Excel files and parses them into JSON format.
- Inserts JSON data into specified databases.
- Lightweight and easy-to-configure.

## Requirements

- Node.js
- Appropriate database drivers and connection strings.

## Usage

### Step 1: Import the Library

```javascript
import { importExcelToDb } from 'excel-to-db';
```

### Step 2: Configure Database Connections

Create a configuration object for the database you are working with.

Example configurations:
```javascript
const config = {
  mysql: { host: 'localhost', user: 'root', password: 'password', database: 'test' },
  mssql: { user: 'sa', password: 'password', server: 'localhost', database: 'test' },
  postgres: { host: 'localhost', user: 'user', password: 'password', database: 'test' },
  mongoose: { uri: 'mongodb://localhost:27017/test', options: {} },
  graphql: { endpoint: 'http://localhost:4000/graphql', headers: { Authorization: 'Bearer token' } }
};
```

### Step 3: Import Data from Excel

To import data, use the `importExcelToDb` function with the file path, database type, and configuration object for the specific database.

```javascript
// Import data from an Excel file into a MySQL database
importExcelToDb('./data.xlsx', 'mysql', config.mysql)
  .then(() => console.log('Data import successful'))
  .catch((error) => console.error('Data import failed:', error));
```

### Supported Database Types

- `mysql`: MySQL or MariaDB
- `mssql`: Microsoft SQL Server
- `postgres`: PostgreSQL
- `mongoose`: MongoDB using Mongoose
- `graphql`: GraphQL endpoint

## API

### `importExcelToDb(filePath, dbType, config)`

- **filePath**: `string` – Path to the Excel file you want to import.
- **dbType**: `string` – Database type. Supported values are `mysql`, `mssql`, `postgres`, `mongoose`, and `graphql`.
- **config**: `object` – Configuration object specific to each database type.

### Example

Here is a complete example using multiple database configurations.

```javascript
import { importExcelToDb } from 'excel-to-db';

const config = {
  mysql: { host: 'localhost', user: 'root', password: 'password', database: 'test' },
  mssql: { user: 'sa', password: 'password', server: 'localhost', database: 'test' },
  postgres: { host: 'localhost', user: 'user', password: 'password', database: 'test' },
  mongoose: { uri: 'mongodb://localhost:27017/test', options: {} },
  graphql: { endpoint: 'http://localhost:4000/graphql', headers: { Authorization: 'Bearer token' } }
};

importExcelToDb('./data.xlsx', 'postgres', config.postgres)
  .then(() => console.log('Data successfully imported into PostgreSQL'))
  .catch((error) => console.error('Data import failed:', error));
```

## Error Handling

Errors during the import process are caught and displayed in the console. Be sure to handle database connection errors and validation errors specific to your database.

## Contributing

Feel free to contribute by opening issues, submitting pull requests, or suggesting new features.

## License

MIT License



