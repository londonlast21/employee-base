// npm to require

const inquirer = require('inquirer');
const cTable = require('console.table');
const express = require('express');

// require connection to my database
const db = require('./db/database');


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
    let addDeps = await addDepartment();
    console.log(addDeps);
    break;

  case 'Add a Role':
    let addRole = await addRole();
    console.log(addRole);
    break;

  case 'Add an Employee':
    let addEmp = await addEmployee();
    console.log(addEmp);
    break;

  case 'Update an Employee Role':
    let updateEmp = await updateEmployee();
    console.log(updateEmp);
    break;
  
  default:
    console.log("error no selection made");
    break;
  }
};


init();


  