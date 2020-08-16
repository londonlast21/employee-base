/* department table data */
INSERT INTO department (name)
VALUES
('Sociology'), -- man num 1
('Math'), -- man num 2
('English'), -- man num 3
('History'), -- man num 4
('Science'), -- man num 5
('Phys. Ed'), -- man num 6
('Drama'); -- man num 7



/* role table data */
INSERT INTO role (title, salary ) --needs dept id
VALUES
('Manager', 45.5 + 'K' ), -- role 1
('Assistant Head Chair', 37.6 ), -- role 2
('Board Member', 34.8 ), --3
('Professor', 33.0 ), -- 4
('Teaching Assistant', 22.0 ); -- 5

----------------

/* employee table data */ -- needs role id
INSERT INTO employee (first_name, last_name, manager_id)
VALUES

-- soc department
('Kevin', 'Cookie', NULL ), -- is manager
('Kathy', 'Casper', ), -- ast head
('Kent', 'Kat', ), -- board
('Karl', 'Marx', ), --board mem
('John', 'Smith', ), -- prof
('Jackie', 'Beats', ); -- ta

-- math dept
('Cali', 'Fornia', NULL ), -- is manager
('Erika', 'Klash', ), -- ast head
('Monnikkie', 'Shame', ), -- board
('Abhora', 'Bites', ), --board mem
('Evah', 'Destruction', ), -- prof
('Hollow', 'Eve', ); -- ta

-- english dept
('Sharon', 'Needles', NULL ), -- is manager
('Chad', 'Michaels', ), -- ast head
('Gia', 'Gunn', ), -- board
('LaShawn', 'Beyond', ), --board mem
('Bitqch', 'Puddin', ), -- prof
('Kendra', 'Onixx', ); -- ta

-- history dept
('Alaska', '5000', NULL ), -- is manager
('Willam', 'Bell', ), -- ast head
('Alyssa', 'Summers', ), -- board
('Roxxxie', 'Andrews', ), --board mem
('Landon', 'Cider', ), -- prof
('Felony', 'Dodger', ); -- ta

--science dept
('James', 'Majesty', NULL ), -- is manager
('Phiphi', 'Ohara', ), -- ast head
('Victoria', 'Black', ), -- board
('Dollya', 'Black', ), --board mem
('Louisianna', 'Purchase', ), -- prof
('Maxi', 'Glamour', ); -- ta

-- phys ed dept
('Priscilla', 'Chambers', NULL ), -- is manager
('Maddelyn', 'Hatter', ), -- ast head
('Adore', 'Delano', ), -- board
('Alyssa', 'Edwards', ), --board mem
('Kim', 'Chi', ), -- prof
('Nina', 'West', ); -- ta


-- drama dept
('Jiggly', 'Caliente', NULL ), -- is manager
('Nina', 'Flowers', ), -- ast head
('Tammie', 'Brown', ), -- board
('Pandora', 'Boxx', ), --board mem
('Morgan', 'McMichaels', ), -- prof
('Carmen', 'Carrera', ); -- ta




