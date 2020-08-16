/* department table data */
INSERT INTO department (name)
VALUES
('Sociology'), 
('Math'), 
('English'), 
('History'), 
('Science'), 
('Phys. Ed'), 
('Drama'); 



/* role table data */
INSERT INTO role (title, salary, department_id) 
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
('Teaching Assistant', '23.0', 2 ); 


('Manager', '45.5', 3 ),
('Assistant Head Chair', '37.6', 3 ), 
('Board Member', '34.8', 3 ),
('Professor', '33.0', 3 ), 
('Teaching Assistant', '22.0', 3 ); 


('Manager', '45.5', 4 ),
('Assistant Head Chair', '37.6', 4 ), 
('Board Member', '34.8', 4 ),
('Professor', '33.0', 4 ), 
('Teaching Assistant', '22.0', 4 );


('Manager', '45.5', 5 ),
('Assistant Head Chair', '37.6', 5 ), 
('Board Member', '34.8', 5 ),
('Professor', '33.0', 5 ), 
('Teaching Assistant', '22.0', 5 ); 


('Manager', '45.5', 6 ),
('Assistant Head Chair', '37.6', 6 ), 
('Board Member', '34.8', 6 ),
('Professor', '33.0', 6 ), 
('Teaching Assistant', '22.0', 6 );


('Manager', '45.5', 7 ),
('Assistant Head Chair', '37.6', 7), 
('Board Member', '34.8', 7),
('Professor', '33.0', 7), 
('Teaching Assistant', '22.0', 7); 

----------------

/* employee table data */ -- needs role id
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES

-- soc department
('Kevin', 'Cookie', 1,  NULL ), -- is manager
('Kathy', 'Casper', 2, 1), -- ast head
('Kent', 'Kat', 3, 1), -- board
('Karl', 'Marx', 3, 1), --board mem
('John', 'Smith', 4, 1), -- prof
('Jackie', 'Beats', 5, 1); -- ta

-- math dept
('Cali', 'Fornia', 1, NULL ), -- is manager
('Erika', 'Klash', 2, 6), -- ast head
('Monnikkie', 'Shame', 3, 6), -- board
('Abhora', 'Bites', 3, 6), --board mem
('Evah', 'Destruction', 4, 6), -- prof
('Hollow', 'Eve', 5, 6); -- ta

-- english dept
('Sharon', 'Needles', 1, NULL ), -- is manager
('Chad', 'Michaels', 2, 11), -- ast head
('Gia', 'Gunn', 3, 11), -- board
('LaShawn', 'Beyond', 3, 11), --board mem
('Bitqch', 'Puddin', 4, 11), -- prof
('Kendra', 'Onixx', 5, 11); -- ta

-- history dept
('Alaska', '5000', 1, NULL ), -- is manager
('Willam', 'Bell', 2, 16), -- ast head
('Alyssa', 'Summers', 3, 16), -- board
('Roxxxie', 'Andrews', 3, 16), --board mem
('Landon', 'Cider', 4, 16), -- prof
('Felony', 'Dodger', 5, 16); -- ta

--science dept
('James', 'Majesty', 1, NULL ), -- is manager
('Phiphi', 'Ohara', 2, 21), -- ast head
('Victoria', 'Black', 3, 21), -- board
('Dollya', 'Black', 3, 21), --board mem
('Louisianna', 'Purchase', 4, 21), -- prof
('Maxi', 'Glamour', 5, 21); -- ta

-- phys ed dept
('Priscilla', 'Chambers', 1, NULL ), -- is manager
('Maddelyn', 'Hatter', 2, 26), -- ast head
('Adore', 'Delano', 3, 26), -- board
('Alyssa', 'Edwards', 3, 26), --board mem
('Kim', 'Chi', 4, 26), -- prof
('Nina', 'West', 5, 26); -- ta


-- drama dept
('Jiggly', 'Caliente', 1, NULL ), -- is manager
('Nina', 'Flowers', 2, 31), -- ast head
('Tammie', 'Brown', 3, 31), -- board
('Pandora', 'Boxx', 3, 31), --board mem
('Morgan', 'McMichaels', 4, 31), -- prof
('Carmen', 'Carrera', 5, 31); -- ta




