import mssql from 'mssql';

async function insertData(data, config) {
  const pool = await mssql.connect(config);
  for (let row of data) {
    const columns = Object.keys(row).join(',');
    const values = Object.values(row).map((val) => `'${val}'`).join(',');
    await pool.request().query(`INSERT INTO your_table (${columns}) VALUES (${values})`);
  }
  await pool.close();
  console.log('Data inserted into MSSQL successfully');
}

export default { insertData };
