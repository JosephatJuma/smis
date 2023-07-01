const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const api = require("./routes/apiRoutes"); //import api routes

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/api/v1/", api); //use api routes

app.listen(4000, "0.0.0.0", () => {
  console.log("app running on prot 4000");
});
