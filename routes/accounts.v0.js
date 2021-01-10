const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accounts");

router.get("/", accountController.home);

module.exports = router;
