// npm to require
const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');

// express stuff start
const app = express();



// create the connection to localHost
const PORT = process.env.PORT || 3306;


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// require connection to my database
const db = require('./db/database');
// require connection to my apiroutes
const apiRoutes = require('./routes/apiRoutes');

// use my api routes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
