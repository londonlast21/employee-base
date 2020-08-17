const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const con = require('../../db/database');
const cTable = require('console.table');


// get all departments
const viewDepartments = () => {
    con.query('SELECT * FROM department', function(err, res) {
      if (err) throw err;
      console.table(res);
    });
   };

// add department
const addDepartment = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter Department Name'

    }, ]).then(function(res) {
        console.log(res);
        db.query(`INSERT INTO department (name) VALUES (?)`, [res.name], function(err, data) {
            if (err) throw err;
            console.log("Department Added");
        })
    })

}


module.exports = {
    viewDepartments,
    addDepartment
};