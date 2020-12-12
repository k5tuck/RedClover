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
  res.render("Login", {
    partials: {
      login_form: "/partials/loginform",
    },
  });
});
router.post("/Login", (req, res) => {
  const { username, password } = req.body;
  // Use req data to verify info against DB
  res.render("");
});

router.get("/SignUp", (req, res) => {
  res.render("SignUp", {
    partials: {
      signup_form: "/partials/signupform",
    },
  });
});

router.post("/SignUp", (req, res) => {
  const {
    firstName,
    lastName,
    street,
    additionalStreet,
    city,
    state,
    zip,
    email,
    phone,
  } = req.body;
  // Use req data for DB Here
  res.redirect(); //Send User to Page to set Username And Password
});

module.exports = router;
