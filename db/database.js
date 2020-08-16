const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wigolettawins1!"
});
  

module.exports = con;