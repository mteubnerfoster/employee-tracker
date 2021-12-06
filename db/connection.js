'use strict';
const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker_DB',
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;