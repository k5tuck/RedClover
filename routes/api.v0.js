const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Welcome to the API Page!</h1>`);
});

module.exports = router;
