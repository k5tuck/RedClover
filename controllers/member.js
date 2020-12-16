const {} = require("../models");
const globalLocals = {
  locals: {},
};
const globalPartials = {
  partials: {},
};

const home = (req, res) => {
  res.render("home", {
    ...globalLocals,
    ...globalPartials,
  });
};

module.exports = { home };
