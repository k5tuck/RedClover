const express = require("express");
const router = express.Router();

router.use("/", (req, res) => {
  res.send(`<h1>Welcome to the Transactions Page!</h1>`);
});

module.exports = router;
