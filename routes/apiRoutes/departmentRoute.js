const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// get all departments
function viewDepartments() {
    console.log("hi");
    // let query = `SELECT * FROM department`;
    // const rows = await.db.query(query);
    // let departmentNames = [];
    // for ()
};



module.exports = {
    viewDepartments,
    //addDepartment
};

module.exports = router;