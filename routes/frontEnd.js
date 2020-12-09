const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
        <h1>Welcome to the Home Page of your Future!</h1>
        `);
});
router.get("/About", (req, res) => {
  res.send(`<h1>Welcome to the About Page!</h1>`);
});
router.get("/Contact", (req, res) => {
  res.send();
});
router.get("/Products", (req, res) => {
  res.send();
});
router.get("/Login", (req, res) => {
  res.send();
});

module.exports = router;
