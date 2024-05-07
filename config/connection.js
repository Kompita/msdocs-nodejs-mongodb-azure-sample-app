require("dotenv").config();
const mongoose = require("mongoose");


async function getConnectionInfo() {
  

  // To override the database name, set the DATABASE_NAME environment variable in the .env file
  const DATABASE_NAME = "test";

  return {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_NAME: process.env.DATABASE_NAME
  }
}


module.exports = {
  getConnectionInfo
}
