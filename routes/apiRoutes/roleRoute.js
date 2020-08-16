const inquirer = require('inquirer');
const express = require('express');
const router = express.Router();
const db = require('../../db/database');

// get all roles
const viewRoles = () => {
    let query = `SELECT * FROM roles`;
    return db.query(query)
    
}

module.exports = {
    viewRoles,
};