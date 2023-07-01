const db = require("../database");
const makePasswordHash = require("../middleware/hashPassword");
exports.createAdmin = async (req, res) => {
  const userpassword = await makePasswordHash(req.body.password);
  const { id, name, email, role, date_joined } = req.body;
  try {
    const sql =
      "INSERT INTO administrator (id, name, email,role,date_joined, password) VALUES (?, ?,?,?, ?, ?)";
    await db.query(sql, [id, name, email, role, date_joined, userpassword]);
    res.send("Administrator registered successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
