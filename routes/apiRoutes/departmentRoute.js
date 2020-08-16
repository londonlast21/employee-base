const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// get all departments
const viewDepartments = () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM departments`;
        db.query(query, (err, results, fields) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};



module.exports = {
    viewDepartments,
    //addDepartment
};

module.exports = router;