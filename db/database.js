const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wigolettawins1!"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    

    // if success connecting
    //console.log("Connected!");

  // then create my 
  con.query("CREATE DATABASE employeeBank", function (err, result) {
      if (err) throw err;
      //console.log("Database created");
  });
  // con.query("CREATE TABLE /departments", function (err, result) {
  //   if (err) throw err;
  //   console.log("dept table created");
  // });
  

});
module.exports = con;