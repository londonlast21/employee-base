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

// api link for department commands
const {
  viewDepartments,
  addDepartment
} = require ('./routes/apiRoutes/employeeRoute');


// api link for role commands
const {
  viewRoles,
  addRole
} = require ('./routes/apiRoutes/roleRoute');

// api link for employee commands
const {
  viewEmployees,
  addEmployee,
  updateEmployeeRole
} = require ('./routes/apiRoutes/employeeRoute');

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// intiate CLI prompt
async function init() {
  await intro();
}

async function intro() {

const answer =   inquirer.prompt([
  {
    type: 'list',
    name: 'selectMenu',
    message: 'Choose an option',
    choices: [
    'View All Departments', 
    'View All Roles', 
    'View All Employees', 
    'Add a Department', 
    'Add a Role', 
    'Add an Employee', 
    'Update an Employee Role'
    ]
  }
]);

// switch to handle answers
switch (answer) {
  case 'View All Departments':
    
    //await viewDepartments();
    //intro();
    console.log(query);
    
    break;

  case 'view all roles':
    // do things
    await viewRoles();
    break;

  case 'view all employees':
    // do things
    await viewEmployees();
    break;
  
  case 'add a department':
    // do things
    await addDepartment();
    break;

  case 'add a role':
    // do things
    await addRole();
    break;

  case 'add an employee':
    // do things
    await addEmployee();
    break;

  case 'update an employee role':
    // do things
    await updateEmployeeRole();
    break;
  
  default:
    break;
  }
}


init();


  


  // if view departments, return departments table
  

  // if view roles, return job title, role id, department role is in, and salary for role

  //if view employees, return table showing employee ids, f and l names, job titles, depts, salaries, and managers employee works for

  // if add department, prompt enter name of department and push to database
  // if (answers === "Add a Department") {
  //   console.log("hello")
  // };

  // if add role, prompt name, salary, dept, and push to database

  // if add employe, prompt for f name , l name, role, and manager and push to db

  // if update employee role, prompt with list of employees to update new role; update new role; push to db as update
