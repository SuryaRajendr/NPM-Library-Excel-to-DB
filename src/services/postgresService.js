import { Client } from 'pg';

async function insertData(data, config) {
  const client = new Client(config);
  await client.connect();
  for (let row of data) {
    const columns = Object.keys(row).join(',');
    const values = Object.values(row).map((val) => `'${val}'`).join(',');
    await client.query(`INSERT INTO your_table (${columns}) VALUES (${values})`);
  }
  await client.end();
  console.log('Data inserted into PostgreSQL successfully');
}

export default { insertData };
