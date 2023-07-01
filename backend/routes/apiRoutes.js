const express = require("express");
const api = express.Router();

//import app routes
const register = require("./api/register/register");
const addAdmin = require("../routes/api/admin/admin");
const login = require("../routes/api/login/login");

//use api routes
api.use("/register", register);
api.use("/admin/", addAdmin);
api.use("/login/", login);

module.exports = api;
