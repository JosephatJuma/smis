const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors());
const api = require("./routes/apiRoutes"); //import api routes

app.get("/", (req, res) => {
  res.send("App is running");
});

app.use("/api/v1/", api); //use api routes

app.listen(port, process.env.HOSTNAME, () => {
  console.log(`app running on prot ${port}`);
});
