const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// get all employees
const viewEmployees = () => {
    let query = `SELECT * FROM department`;
    return db.query(query);
};

module.exports = {
    viewEmployees,
}