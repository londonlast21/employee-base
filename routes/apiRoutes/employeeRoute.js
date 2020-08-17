const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// get all employees
const viewEmployees = () => {
    let query = `SELECT * FROM employee`;
    return db.query(query);
    
};

// add employee
const addEmployee = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'first_name',
        message: 'Enter employee first name'
    },
    {
        type: 'input',
        name: 'last_name',
        message: 'Enter employee last name'
    },
    {
        type: 'number',
        name: 'role_id',
        message: 'Enter employee role ID',
    },
    {
        type: 'number',
        name: 'manager_id',
        message: 'Enter ID of manager to employee'
    }


]).then(function(res) {
    db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES (?, ?, ?, ?)`, [res.first_name, res.last_name, res.role_id, res.manager_id], function(err, data) {
        if (err) throw err;
        console.log("added employee");
    })
})


}

// update employee
const updateEmployee = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'first_name',
        message: 'Enter first name of employee to update',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter updated role title'
    }
]).then (function (res) {
    db.query(`UPDATE employee SET role_id = ${res.title} WHERE first_name = ?`), function (err, data) {
        console.log("role id updated");
    }
})
}

module.exports = {
    viewEmployees,
    addEmployee,
    updateEmployee
};