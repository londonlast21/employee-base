const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "3001",
    user: "londonlast21",
    password: "Wigolettawins1!"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // con.query("CREATE DATABASE employees", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });
});
module.exports = con;