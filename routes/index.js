const express = require("express");
const router = express.Router();

router.use("/", require("./frontEnd.v0"));
// router.use("/trans", require("./trans.v0"));
router.use("/members", require("./members.v0"));
// router.use("/accounts", require("./accounts.v0"));

router.get("*", (req, res) => {
  res.render("Error_Page");
});

module.exports = router;
