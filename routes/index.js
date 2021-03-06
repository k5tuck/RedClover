const express = require("express");
const router = express.Router();
const error_404 = require("../controllers/frontend");

router
  .use("/", require("./frontEnd.v0"))
  .use("/members", require("./members.v0"))
  .use("/accounts", require("./accounts.v0"))
  .get("*", error_404.error);

// .use("/employees", require("./employees.v0"))

module.exports = router;
