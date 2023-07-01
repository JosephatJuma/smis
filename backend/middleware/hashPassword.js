const bcrypt = require("bcryptjs");

const makeHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashPassord = bcrypt.hash(password, salt);
  return hashPassord;
};
module.exports = makeHash;
