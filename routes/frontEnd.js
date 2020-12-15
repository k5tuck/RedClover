const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("Home");
});
router.get("/about", (req, res) => {
  res.render("About");
});
router.get("/contact", (req, res) => {
  res.render("Contact");
});
router.get("/products", (req, res) => {
  res.render("Products");
});
router.get("/login", (req, res) => {
  res.render("Login", {
    partials: {
      login_form: "/partials/loginform",
    },
  });
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Use req data to verify info against DB
  res.render("");
});

router.get("/signup", (req, res) => {
  res.render("SignUp", {
    partials: {
      signup_form: "/partials/signupform",
    },
  });
});

router.post("/signup", async (req, res) => {
  try {
    const {
      username,
      password,
      verifyPassword,
      firstName,
      lastName,
      street,
      additionalStreet,
      city,
      state,
      zip,
      email,
      phone,
      ssn,
      govtid,
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Use req data for DB Here
    res.redirect(); //Send User to Page to set Username And Password
  } catch {}
});

module.exports = router;
