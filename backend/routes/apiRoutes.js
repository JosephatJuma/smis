const express = require("express");
const api = express.Router();

//import app routes
const register = require("./api/register/register");

//use api routes
api.use("/register", register);

module.exports = api;
