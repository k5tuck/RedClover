const express = require("express");
const frontendController = require("../controllers/frontend");
const router = express.Router();

router
  .get("/", frontendController.home)

  .get("/about", frontendController.about)

  .get("/contact", frontendController.contact)

  .get("/products", frontendController.products)

  .get("/login", frontendController.login)
  .post("/login", frontendController.processLogin)

  .get("/signup", frontendController.signup)
  .post("/signup", frontendController.processSignUp)

  .get("/unauthorized", frontendController.unauthorizedAccess);

module.exports = router;
