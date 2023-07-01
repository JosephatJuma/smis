const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const database = mysql
  .createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: process.env.DATABASE_PORT,
    connectTimeout: 60000, // Set connection timeout to 60 seconds
  })
  .promise();

module.exports = database;

// =railway
// =5CufD9mowXlaYT3JBgAe
// =root
// 6787
// containers-us-west-34.railway.app
