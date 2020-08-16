// npm to require

const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');
//const router = express.Router();

// express stuff start
//const app = express();
// create the connection to localHost
//const PORT = process.env.PORT || 3306;

// Express middleware
//app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

// require connection to my database
const db = require('./db/database');
// require connection to my apiroutes
//const apiRoutes = require('./routes/apiRoutes');

// use my api routes
//app.use('/api', apiRoutes);

// // // api link for department commands
let {
  viewDepartments,
  addDepartment
} = require ('./routes/apiRoutes/departmentRoute');
console.log(viewDepartments)



// // api link for role commands
let {
  viewRoles,
  addRole
} = require ('./routes/apiRoutes/roleRoute');

// // api link for employee commands
let {
  viewEmployees,
  addEmployee,
  updateEmployeeRole
} = require ('./routes/apiRoutes/employeeRoute');

// Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });

// intiate CLI prompt
async function init() {
  await intro();
}

async function intro() {

const answer = await inquirer.prompt([
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

console.log(answer);

// switch to handle answers
switch (answer.selectMenu) {
  case 'View All Departments':
    let deps = await viewDepartments();
    console.log(deps);
    break;

  case 'View All Roles':
    let roles = await viewRoles();
    console.log(roles);
    break;

  case 'View All Employees':
    let emps = await viewEmployees();
    console.log(emps);
    break;
  
  case 'Add a Department':
    addDepartment = function addDepartment(){};
    await addDepartment();
    break;

  case 'Add a Role':
    addRole = function addRole(){};
    await addRole();
    break;

  case 'Add an Employee':
    addEmployee = function addEmployee(){};
    await addEmployee();
    break;

  case 'Update an Employee Role':
    updateEmployeeRole = function updateEmployeeRole(){};
    await updateEmployeeRole();
    break;
  
  default:
    console.log("error no selection made");
    break;
  }
}

init();


  