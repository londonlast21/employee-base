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
        message: 'Enter role name'

    },
    {
        type: 'number',
        name: 'salary',
        message: 'Enter employee salary'
    },
    {
        type:'input',
        name: 'department_id',
        message: 'Enter department for role'
    }

]).then
(function(res) {
    db.query(`INSERT INTO role VALUES (?, ?, ?)`, [res.title, res.salary, res.department_id],
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