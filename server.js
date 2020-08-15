// npm to require
const inquirer = require('inquirer');
const cTable = require('console.table');
const con = require('./db/database');

// create the connection to localHost
const PORT = process.env.PORT || 3001;

// Start server after DB connection
con.on('open', () => {
    {
      console.log(`Server running on port ${PORT}`);
    };
});
