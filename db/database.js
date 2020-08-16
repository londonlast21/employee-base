const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wigolettawins1!"
});
  
con.connect(function(err) {
    if (err) throw err;

  // then create my database
  // con.query("CREATE DATABASE employeeBank", function (err, result) {
  //     if (err) throw err;
    
  // });
  
});
module.exports = con;