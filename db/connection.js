'use strict';
require("dotenv").config();
const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'employee_tracker_DB',
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;