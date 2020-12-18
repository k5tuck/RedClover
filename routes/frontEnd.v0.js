const express = require("express");
const bcrypt = require("bcryptjs");
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

router
  .get("/login", (req, res) => {
    res.render("Login", {
      partials: {
        login_form: "/partials/loginform",
      },
    });
  })
  .post("/login", async (req, res) => {
    const { username, password } = req.body;
    // Find user and hashed pass from DB
    if (userfound) {
      console.log("Found User");
      const valid = await bcrypt.compareSync(password, hashedPassword);
      if (valid) {
        res.redirect();
      } else {
        console.log("User doesn't exist");
        res.redirect();
      }
    }
    // Use req data to verify info against DB
    res.render("");
  });

router
  .get("/signup", (req, res) => {
    res.render("SignUp", {
      partials: {
        signup_form: "/partials/signupform",
        countries: "/partials/countriesDropDown",
        states: "/partials/statesDropDown",
      },
    });
  })

  .post("/signup", async (req, res) => {
    try {
      const {
        username,
        password,
        verifyPassword,
        firstName,
        lastName,
        country,
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
      const salt = await bcrypt.genSaltSync(11);
      const hashedPassword = await bcrypt.hashSync(password, salt);
      const hashSSN = await bcrypt.hashSync(ssn, salt);
      // Use req data for DB Here
      res.redirect(); //Send User to Page to set Username And Password
    } catch {}
  });

module.exports = router;
