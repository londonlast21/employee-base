const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// get all roles
const viewRoles = () => {
    let query = `SELECT * FROM role`;
    return db.query(query)
    
};

// add role
const addRole = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'title',
        message: 'Enter role title'

    },
    // {
    //     type: 'number',
    //     name: 'role_id',
    //     message: 'Enter role id'
    // },
    {
        type: 'decimal',
        name: 'salary',
        message: 'Enter role salary'
    },
    {
        type:'number',
        name: 'department_id',
        message: 'Enter department ID for role; must be department ID that exists currently'
    },

]).then
(function(res) {
    console.log(res);
    db.query(`INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`, [res.title, res.salary, res.department_id],
    function(err, data) {
        if (err) throw err;
        console.log("role added");
    })
})


}


module.exports = {
    viewRoles,
    addRole
};