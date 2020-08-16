DROP DATABASE IF EXISTS employees;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS employee;


CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
    

);

CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INTEGER UNSIGNED,
    CONSTRAINT fk_department FOREIGN KEY (id) REFERENCES department(id) ON DELETE CASCADE

    
);

/*this table is only one not generating; error with roleid?*/
CREATE TABLE employee (
    employee_id INTEGER PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER UNSIGNED,
    CONSTRAINT fk_role FOREIGN KEY (id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INTEGER 
);
