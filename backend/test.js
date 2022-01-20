const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'mysql',
  user: 'root',
  password: 'root',
  database: 'library_service',
  port: 3306,
});

exports.pool = pool;
