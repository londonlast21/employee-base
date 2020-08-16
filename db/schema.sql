DROP DATABASE IF EXISTS employees;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;


CREATE TABLE department (
    department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL

);

CREATE TABLE role (
    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER NOT NULL
);

/*this table is only one not generating; error with roleid?*/
CREATE TABLE employee (
    employee_id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,

   [CONSTRAINT roleid] 
   FOREIGN KEY (role_id)
   [ON DELETE CASCADE]
   [ON UPDATE CASCADE],
   
    manager_id INTEGER 
);
