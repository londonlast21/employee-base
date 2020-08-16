const mysql = require('mysql2');
const db = require('./db/database');

const con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wigolettawins1!",
    database: "employeeBank",
    multipleStatements: true
});

const database = {
    dropDeptTable: `DROP TABLE IF EXISTS department`,
    dropRoleTable: `DROP TABLE IF EXISTS role`,
    dropEmployeeTable: `DROP TABLE IF EXISTS employee`,
    createDeptTable: `CREATE TABLE IF NOT EXISTS department (
        id INTEGER UNSIGNED AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(department_id) REFERENCES department(id)
    )`,
    createRoleTable: `CREATE TABLE IF NOT EXISTS role (
        id INTEGER UNSIGNED AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INTEGER UNSIGNED NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY (department_id) REFERENCES department(id)
    )`,
    createEmployeeTable: `CREATE TABLE IF NOT EXISTS employee (
        id INTEGER UNSIGNED AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER UNSIGNED NOT NULL,
        manager_id INTEGER,
        PRIMARY KEY(id),
        FOREIGN KEY (role_id) REFERENCES role(id),
        FOREIGN KEY (manager_id) REFERENCES employee(id)
    )`,
    reset: function() {
        db.query(this.dropDeptTable, err => {
            iff (err) throw err;
        });
        db.query(this.dropRoleTable, err => {
            if (err) throw err;
        });
        db.query(this.dropEmployeeTable, err => {
            if (err) throw err;
        });
        db.query(this.createDeptTable, err => {
            if (err) throw err;
        });
        db.query(this.createRoleTable, err => {
            if (err) throw err;
        });
        db.query(this.createEmployeeTable, err => {
            if (err) throw err;
        });
    },
    init: function() {
        db.query(
        `INSERT INTO department (name)
        VALUES
            ('Sociology'),
            ('Math'),
            ('English'),
            ('History'),
            ('Science'),
            ('Phys. Ed'),
            ('Drama')`,
        err => {
            if (err) {
                console.log(err);
                throw err;
            }
        }
        );

        db.query(
            `INSERT INTO role (title, salary, department_id) 
            VALUES
            ('Manager', '45.5', 1 ),
            ('Assistant Head Chair', '37.6', 1 ),
            ('Board Member', '34.8', 1 ),
            ('Professor', '33.0', 1 ),
            ('Teaching Assistant', '22.0', 1 ),
            ('Manager', '43.5', 2),
            ('Assistant Head Chair', '37.6', 2),
            ('Board Member', '34.3', 2 ),
            ('Professor', '34.0', 2 ),
            ('Teaching Assistant', '23.0', 2 ),
            ('Manager', '45.5', 3 ),
            ('Assistant Head Chair', '37.6', 3 ),
            ('Board Member', '34.8', 3 ),
            ('Professor', '33.0', 3 ),
            ('Teaching Assistant', '22.0', 3 ),
            ('Manager', '45.5', 4 ),
            ('Assistant Head Chair', '37.6', 4 ),
            ('Board Member', '34.8', 4 ),
            ('Professor', '33.0', 4 ),
            ('Teaching Assistant', '22.0', 4 ),
            ('Manager', '45.5', 5 ),
            ('Assistant Head Chair', '37.6', 5 ),
            ('Board Member', '34.8', 5 ),
            ('Professor', '33.0', 5 ),
            ('Teaching Assistant', '22.0', 5 ),
            ('Manager', '45.5', 6 ),
            ('Assistant Head Chair', '37.6', 6 ),
            ('Board Member', '34.8', 6 ),
            ('Professor', '33.0', 6 ),
            ('Teaching Assistant', '22.0', 6 ),
            ('Manager', '45.5', 7 ),
            ('Assistant Head Chair', '37.6', 7),
            ('Board Member', '34.8', 7),
            ('Professor', '33.0', 7),
            ('Teaching Assistant', '22.0', 7)`,
            err => {
                if (err) {
                    console.log(error);
                    throw err;
                }
            }
        );

        db.query(
            `INSERT INTO employee (first_name, last_name, role_id, manager_id)
            VALUES
            ('Kevin', 'Cookie', 1,  NULL ),
            ('Kathy', 'Casper', 2, 1),
            ('Kent', 'Kat', 3, 1),
            ('Karl', 'Marx', 3, 1),
            ('John', 'Smith', 4, 1),
            ('Jackie', 'Beats', 5, 1),
            ('Cali', 'Fornia', 1, NULL ),
            ('Erika', 'Klash', 2, 6),
            ('Monnikkie', 'Shame', 3, 6),
            ('Abhora', 'Bites', 3, 6),
            ('Evah', 'Destruction', 4, 6),
            ('Hollow', 'Eve', 5, 6),
            ('Sharon', 'Needles', 1, NULL ),
            ('Chad', 'Michaels', 2, 11),
            ('Gia', 'Gunn', 3, 11),
            ('LaShawn', 'Beyond', 3, 11),
            ('Bitqch', 'Puddin', 4, 11),
            ('Kendra', 'Onixx', 5, 11),
            ('Alaska', '5000', 1, NULL ),
            ('Willam', 'Bell', 2, 16),
            ('Alyssa', 'Summers', 3, 16),
            ('Roxxxie', 'Andrews', 3, 16),
            ('Landon', 'Cider', 4, 16),
            ('Felony', 'Dodger', 5, 16),
            ('James', 'Majesty', 1, NULL ),
            ('Phiphi', 'Ohara', 2, 21),
            ('Victoria', 'Black', 3, 21),
            ('Dollya', 'Black', 3, 21),
            ('Louisianna', 'Purchase', 4, 21),
            ('Maxi', 'Glamour', 5, 21),
            ('Priscilla', 'Chambers', 1, NULL ),
            ('Maddelyn', 'Hatter', 2, 26),
            ('Adore', 'Delano', 3, 26),
            ('Alyssa', 'Edwards', 3, 26),
            ('Kim', 'Chi', 4, 26),
            ('Nina', 'West', 5, 26),
            ('Jiggly', 'Caliente', 1, NULL ),
            ('Nina', 'Flowers', 2, 31),
            ('Tammie', 'Brown', 3, 31),
            ('Pandora', 'Boxx', 3, 31),
            ('Morgan', 'McMichaels', 4, 31),
            ('Carmen', 'Carrera', 5, 31)`,
            err => {
                if (err) {
                console.log(err);
                throw err;
                }
            }
        );
}, dropAndInit: function() {
    this.reset();
    this.init();
},
dropAndEnd: function() {
    db.query(this.dropDeptTable, err => {
        if (err) throw err;
    });
    db.query(this.dropRoleTable, err => {
        if (err) throw err;
    });
    db.query(this.dropEmployeeTable, err => {
        if (err) throw err;
    });

    db.end();
}
};


module.exports = con;
module.exports = database;