const express = require("express");
const memberController = require("../controllers/member");
const router = express.Router();

router.use("/", memberController.home);

router.use("/", (req, res) => {
  res.render("home", {
    ...globalLocals,
    ...globalPartials,
  });
});

module.exports = router;
