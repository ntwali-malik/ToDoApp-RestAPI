//importing pg module to interact with Postgresql

const{ Pool } = require('pg');

// Create a new Pool instance to manage connections to the PostgreSQL database

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database: 'todo_tb',
    password: '123',
    port: '5432',
});

// Establish the connection and log success or error

pool.connect()
.then(() => console.log('connected to postgres'))
.catch(err => console.error('connection error',err.stack));

// Export the pool object so it can be used in other files

module.exports = pool;