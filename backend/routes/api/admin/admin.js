const express = require("express");
const controller = require("../../../controllers/admin");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("admin");
});
router.get("/create", (req, res) => {
  res.send("create admin");
});
router.post("/create", controller.createAdmin);

module.exports = router;
