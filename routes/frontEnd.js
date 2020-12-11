const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home");
});
router.get("/About", (req, res) => {
  res.render("About");
});
router.get("/Contact", (req, res) => {
  res.render("Contact");
});
router.get("/Products", (req, res) => {
  res.render("Products");
});
router.get("/Login", (req, res) => {
  res.render("Login");
});

module.exports = router;
