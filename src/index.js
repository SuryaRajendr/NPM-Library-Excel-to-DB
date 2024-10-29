import { readFileSync, utils } from 'xlsx';
import mysqlService from './services/mysqlService.js';
import mssqlService from './services/mssqlService.js';
import postgresService from './services/postgresService.js';
import mongooseService from './services/mongooseService.js';
import graphqlService from './services/graphqlService.js';

// Reads and parses Excel file
export async function importExcelToDb(filePath, dbType, config) {
  const workbook = readFileSync(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = utils.sheet_to_json(sheet);

  switch (dbType) {
    case 'mysql':
      await mysqlService.insertData(data, config);
      break;
    case 'mssql':
      await mssqlService.insertData(data, config);
      break;
    case 'postgres':
      await postgresService.insertData(data, config);
      break;
    case 'mongoose':
      await mongooseService.insertData(data, config);
      break;
    case 'graphql':
      await graphqlService.insertData(data, config);
      break;
    default:
      throw new Error('Unsupported database type');
  }
}
