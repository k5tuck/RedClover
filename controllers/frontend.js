const { Members } = require("../models");
const bcrypt = require("bcryptjs");

const home = (req, res) => {
  res.render("Home");
};

const about = (req, res) => {
  res.render("About");
};

const contact = (req, res) => {
  res.render("Contact");
};

const products = (req, res) => {
  res.render("Products");
};

const login = (req, res) => {
  res.render("Login", {
    partials: {
      login_form: "/partials/loginform",
    },
  });
};

const processLogin = async (req, res) => {
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
};

const signup = (req, res) => {
  res.render("SignUp", {
    partials: {
      signup_form: "/partials/signupform",
      countries: "/partials/countriesDropDown",
      states: "/partials/statesDropDown",
    },
  });
};

const processSignUp = async (req, res) => {
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
    res.redirect("/login");
  } catch (e) {
    if (e.name === "SequelizeUniqueConstraintError") {
      console.log("username is taken");
      res.redirect("/signup");
    }
    res.redirect("/signup");
  }
};

const error = (req, res) => {
  res.render("Error_Page");
};

const unauthorizedAccess = (req, res) => {
  res.render("Unauthorized");
};

module.exports = {
  home,
  about,
  contact,
  products,
  login,
  processLogin,
  signup,
  processSignUp,
  error,
  unauthorizedAccess,
};
