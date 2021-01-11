const express = require("express");
const memberController = require("../controllers/member");
const router = express.Router();
const { requireLogin } = require("../auth");

router
  .use(requireLogin)
  .get("/", memberController.home)
  .get("/mkacc", memberController.createAccount)
  .post("/mkacc", memberController.processAcctCreation)
  .get("/:id/acct", memberController.acctDetails)
  .get("/logout", memberController.logout);

module.exports = router;
