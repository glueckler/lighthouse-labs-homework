const knex = require('knex')({
  client: 'pg',
  connection: {
    user : 'slimbean',
    database : 'famous_people'
  }
})

const query = knex
.select()
.from('famous_people')
.where({first_name: 'Paul'})

query.then((rows) => {
  console.log(rows)
  knex.destroy();
})
.catch((error) => {
  console.error(error);
  knex.destroy();
});

// knex.destroy()