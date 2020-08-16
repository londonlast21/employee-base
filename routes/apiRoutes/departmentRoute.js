const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// get all departments
const viewDepartments = () => {
        let query = `SELECT * FROM department`;
        return db.query(query);
    
};



module.exports = {
    viewDepartments,
    //addDepartment
};

//module.exports = router;