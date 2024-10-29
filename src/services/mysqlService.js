import mysql from 'mysql2/promise';

async function insertData(data, config) {
  const connection = await mysql.createConnection(config);
  for (let row of data) {
    const columns = Object.keys(row).join(',');
    const values = Object.values(row).map((val) => `'${val}'`).join(',');
    await connection.query(`INSERT INTO your_table (${columns}) VALUES (${values})`);
  }
  await connection.end();
  console.log('Data inserted into MySQL successfully');
}

export default { insertData };
