USE employee_tracker_db;

-- department seeds
INSERT INTO departments (dept_name)
VALUES ('Production');

INSERT INTO departments (dept_name)
VALUES ('Research and Development');

INSERT INTO departments (dept_name)
VALUES ('Marketing');

-- role seeds

--- Production
INSERT INTO roles (role_title, salary, department_id)
VALUES ('Production Lead', 140000.00, 1);

INSERT INTO roles (role_title, salary, department_id)
VALUES ('Production Agent', 85000.00, 1);

INSERT INTO roles (role_title, salary, department_id)
VALUES ('Receptionist', 70000.00, 1);

--- Research and Development
INSERT INTO roles (role_title, salary, department_id)
VALUES ('QA Specialist', 125000.00, 2);

INSERT INTO roles (role_title, salary, department_id)
VALUES ('Education and Instruction', 95000.00, 2);

INSERT INTO roles (role_title, salary, department_id)
VALUES ('Security Researcher', 80000.00, 2);

--- Marketing
INSERT INTO roles (role_title, salary, department_id)
VALUES ('Chief Marketing Officer', 115000.00, 3);

INSERT INTO roles (role_title, salary, department_id)
VALUES ('Marketing Coordinator', 94000.00, 3);

INSERT INTO roles (role_title, salary, department_id)
VALUES ('Marketing Consultant', 79000.00, 3);

-- employee seeds

--- Production
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Steven', 'Universe', 1, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Connie', 'Maheswaren', 2, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Lapis', 'Lazuli', 2, 1);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Rose', 'Quartz', 3, 1);

--- Research and Development
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Sadie', 'Miller', 4, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Lars', 'Barriga', 5, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Peridot', 'Rabara', 6, 2);

--- Marketing
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Jasper', 'Brooks', 7, NULL);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Buck', 'Dewey', 8, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Ronaldo', 'Fryman', 9, 3);