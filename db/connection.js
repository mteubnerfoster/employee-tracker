'use strict';
const mysql = require('mysql2');
require("dotenv").config();
const util = require('util');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'employee_tracker_DB',
});

connection.connect(function(err) {
    if (err) throw err;
});

connection.query = util.promisify(connection.query);

module.exports = connection;