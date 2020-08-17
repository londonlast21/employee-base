const mysql = require('mysql2');
const util = require('util');
const cTable = require('console.table');

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "employeeBank",
    password: "Wigolettawins1!"
});
  
con.connect(function(err) {
    if (err) throw err;
  
});



con.query = util.promisify(con.query);
var array = [con.query];
 
console.table("array");


module.exports = con;