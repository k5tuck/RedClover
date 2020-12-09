const express = require("express");
const router = express.Router();

router.use("/", require("./frontEnd"));
router.use("/api", require("./api.v0"));
router.use("/customers", require("./customers.v0"));

router.get("*", (req, res) => {
  res.send("404 Error: Page Does Not Exist");
});

module.exports = router;
