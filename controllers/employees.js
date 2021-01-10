const { Employees } = require("../models");

const home = (req, res) => {
  res.send(`<h1>This is the Employees Login Page</h1>`);
};

module.exports = {
  home,
};
