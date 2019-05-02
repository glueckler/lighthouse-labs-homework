const { Client} = require('pg')
const {user, password, database, host, port, ssl} = require('./settings')

const client = new Client({
  user,
  password,
  database,
  host,
  port,
  ssl
})

const searchValue = process.argv[2];
const query = `SELECT * FROM food WHERE name = '${searchValue}'`
client.connect()
client.query(query, (err, result) => {
  if (err) {
    console.error('Query Error', err)
  }
  const length = result.rows.length;
  result = result.rows[0]
  console.log(`Found ${length} food by the name '${searchValue}'`,
    `\n${result.name}, description: '${result.description}'`)
  client.end()
})
