// Import the database connection from the config file
const pool = require('../config/db');

// Function to create the "todos" table if it doesn't already exist

const createTable = async() => {
    const query = `
    CREATE TABLE IF NOT EXISTS todos (  // SQL query to create the "todos" table
      id SERIAL PRIMARY KEY,           // "id" column as the primary key, auto-incremented
      task VARCHAR(255) NOT NULL,      // "task" column for the task description, required
      completed BOOLEAN DEFAULT false  // "completed" column to track task completion, default is false
    );
  `;
  await pool.query(query); // Execute the SQL query using the pool connection

  // Call the function to create the table when the module is loaded
    createTable();

  // Export the pool object so it can be used for querying in other files
  module.exports = pool;  
}
