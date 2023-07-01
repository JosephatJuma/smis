const bcrypt = require("bcryptjs");

const compareHash = async (userpassword, resultPassword) => {
  const validPassword = await bcrypt.compare(userpassword, resultPassword);
  return validPassword;
};

module.exports = compareHash;
