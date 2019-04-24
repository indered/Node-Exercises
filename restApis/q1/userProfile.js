var users = require("./user.json");

const findUser = name => {
  let filteredUsers = users.filter(u =>
    u.username.startsWith(name.toLowerCase())
  );
  return filteredUsers.map(u => u.username);
};

module.exports.findUser = findUser;
