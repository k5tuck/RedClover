const { Accounts } = require("../models");

const home = (req, res) => {
  res.send(`<h1>This is the Accounts details Page</h1>`);
};

module.exports = {
  home,
};
