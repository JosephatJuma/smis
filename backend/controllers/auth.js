const db = require("../database");
const validatePassword = require("../middleware/comparePassword");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const sql = "SELECT password FROM administrator WHERE email=?";
    await db.query(sql, [email]).then(async (result) => {
      if (result.length > 0) {
        const datafromDB = result[0];
        const passwordFromDB = datafromDB[0].password;
        console.log(passwordFromDB);
        const valid = await validatePassword(password, passwordFromDB);
        valid
          ? res.status(200).send("Succeeded! ")
          : res.status(200).send("Wrong Password! ");
      } else {
        res.status(200).send("Wrong user email! ");
      }
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.sendVerificationCode = (req, res) => {
  //send code
};

exports.verifyEmail = (req, res) => {
  //send code
};
