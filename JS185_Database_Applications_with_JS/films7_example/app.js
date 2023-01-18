const { Client } = require('pg');
// const Client = require('pg').Client;
let client = new Client({ database: 'films7' });

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);

  console.log(data.rows[2].count);
  client.end();
}

logQuery("SELECT count(id) FROM films WHERE duration < 110 GROUP BY genre");