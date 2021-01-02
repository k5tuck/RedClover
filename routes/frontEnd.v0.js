const express = require("express");
const bcrypt = require("bcryptjs");
const { Members } = require("../models");
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
    const userfound = await Members.findOne({
      where: { username },
    });
    if (userfound) {
      console.log("Found User");
      const hash = userfound.hash;
      const valid = await bcrypt.compareSync(password, hash);
      if (valid) {
        req.session.user = {
          username,
          id: userfound.member_id,
        };
        req.session.save(() => {
          res.redirect("/members");
        });
      } else {
        console.log("User doesn't exist");
        res.redirect("/login");
      }
    }
    // Use req data to verify info against DB
    // res.render("");
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
    const {
      username,
      password,
      verifyPassword,
      firstname,
      lastname,
      country,
      address,
      additionalStreet,
      city,
      state,
      zip,
      email,
      phone,
      ssn,
      identification,
      idInput,
    } = req.body;
    const salt = await bcrypt.genSaltSync(11);
    const hash = await bcrypt.hashSync(password, salt);
    const hashSSN = await bcrypt.hashSync(ssn, salt);
    try {
      const newMember = await Members.create({
        username,
        hash,
        firstname,
        lastname,
        country,
        address,
        addt_address: additionalStreet,
        city,
        state,
        zip,
        email,
        phone,
        ssn: hashSSN,
        govtid: identification,
        govtnum: idInput,
      });
      console.log(newMember);
      res.redirect("/login");
    } catch (e) {
      if (e.name === "SequelizeUniqueConstraintError") {
        console.log("username is taken");
        res.redirect("/signup");
      }
      console.log("Error here");
      console.log(e);
      res.redirect("/signup");
    }
    console.log("Need something here");
  });

router.get("/unauthorized", (req, res) => {
  res.render("Unauthorized");
});

module.exports = router;
