const {} = require("../models");

const globalLocals = {
  locals: {},
};
const globalPartials = {
  partials: {},
};

const home = (req, res) => {
  res.render("Members", {
    ...globalLocals,
    ...globalPartials,
  });
};

// Logout Function
const logout = (req, res) => {
  console.log("Logging Out");
  req.session.destroy(() => {
    res.redirect("/");
  });
};

module.exports = { home, logout };
