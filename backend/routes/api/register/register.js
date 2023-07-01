const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Register");
});

router.post("/", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

module.exports = router;
