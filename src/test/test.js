import { importExcelToDb } from 'excel-to-db';

const config = {
  mysql: { host: 'localhost', user: 'root', password: 'password', database: 'test' },
  mssql: { user: 'sa', password: 'password', server: 'localhost', database: 'test' },
  postgres: { host: 'localhost', user: 'user', password: 'password', database: 'test' },
  mongoose: { uri: 'mongodb://localhost:27017/test', options: {} },
  graphql: { endpoint: 'http://localhost:4000/graphql', headers: { Authorization: 'Bearer token' } }
};

importExcelToDb('./data.xlsx', 'mysql', config.mysql);
