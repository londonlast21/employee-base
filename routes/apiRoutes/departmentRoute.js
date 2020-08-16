const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const con = require('../../db/database');

// get all departments
const viewDepartments = () => {
        let query = `SELECT * FROM department`;
        return db.query(query);
        
    
};

// add department
const addDepartment = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'Enter Department Name'

    }, ]).then(function(res) {
        db.query(`INSERT INTO department (name) VALUES (?)`, [res.department], function(err, data) {
            if (err) throw err;
            console.log("Department Added");
        })
    })

}


module.exports = {
    viewDepartments,
    addDepartment
};