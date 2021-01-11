const { Members } = require("../models");
const bcrypt = require("bcryptjs");

const home = (req, res) => {
  res.render("frontend/Home");
  // res.render("frontend/Login", {
  //   partials: {
  //     login_form: "/partials/loginform",
  //   },
  // });
};

const about = (req, res) => {
  res.render("frontend/About");
};

const contact = (req, res) => {
  res.render("frontend/Contact");
};

const products = (req, res) => {
  res.render("frontend/Products");
};

const login = (req, res) => {
  res.render("frontend/Login", {
    partials: {
      login_form: "/partials/loginform",
    },
  });
};

const processLogin = async (req, res) => {
  const { password } = req.body;
  let { username } = req.body;
  username = username.toLowerCase().replace(" ", "");
  try {
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
          id: userfound.id,
        };
        req.session.save(() => {
          res.redirect("/members");
        });
      } else {
        console.log("Password Incorrect! Try Again");
        res.redirect("/login");
      }
    } else {
      console.log("User Not Found");
      res.redirect("/signup");
      throw Error;
    }
  } catch (e) {
    console.log("Error Occurred");
    console.log(e);
  }

  // Use req data to verify info against DB
  // res.render("");
};

const signup = (req, res) => {
  res.render("frontend/SignUp", {
    partials: {
      signup_form: "/partials/signupform",
      countries: "/partials/countriesDropDown",
      states: "/partials/statesDropDown",
    },
  });
};

const processSignUp = async (req, res) => {
  const {
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
  let { username } = req.body;
  username = username.toLowerCase().replace(" ", "");
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
      console.log("Try Again");
      res.redirect("/signup");
    }
    res.redirect("/signup");
  }
};

const error = (req, res) => {
  res.render("frontend/Error_Page");
};

const unauthorizedAccess = (req, res) => {
  res.render("frontend/Unauthorized");
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
