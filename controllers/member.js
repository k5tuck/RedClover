const { INTEGER } = require("sequelize");
const { Members, Accounts } = require("../models");

const globalLocals = {
  locals: {},
};
const globalPartials = {
  partials: {
    header: "/partials/header",
    footer: "/partials/footer",
  },
};

const home = async (req, res) => {
  const { id } = req.session.user;
  const accounts = await Accounts.findAll({
    where: {
      member_id: id,
      // include: [
      //   {
      //     model: Members,
      //     attributes: ["firsname", "lastname"],
      //   },
      // ],
    },
  });
  const member = await Members.findByPk(id);
  res.render("members/Home", {
    locals: {
      member,
      accounts,
    },
    ...globalPartials,
  });
};
const createAccount = async (req, res) => {
  const { id } = req.session.user;
  const accounts = await Accounts.findAll({
    where: {
      member_id: id,
    },
  });
  res.render("members/CreateAccount", {
    locals: {
      accounts,
    },
    ...globalPartials,
  });
};

const processAcctCreation = async (req, res) => {
  try {
    const { account_type, fromacct, depositamount } = req.body;
    const { id } = req.session.user;
    console.log(fromacct);
    if (fromacct == "externalacct") {
      console.log("External Account Chosen");
    } else if (fromacct) {
      const moneyGone = await Accounts.findOne({
        where: {
          account_number: fromacct,
        },
      });
      const withdrawnAvail = moneyGone.avail_balance - depositamount;
      const withdrawnCurr = moneyGone.curr_balance - depositamount;
      await moneyGone.update({
        avail_balance: withdrawnAvail,
        curr_balance: withdrawnCurr,
      });
    } else {
      console.log("Account not specified");
      throw Error;
    }
    //Generate Random Numbers for Account
    const rand = (min, max) => {
      num = [];
      for (let i = 0; i < 6; i++) {
        let randomNum = Math.random() * (max - min) + min;
        num.push(Math.floor(randomNum));
      }
      const finalNum = num.join("");
      return finalNum;
    };
    console.log(rand(0, 9));
    // Choose account Type for Number Generation
    // if (account_type == "Checking") {
    //   const account_number = 1008 + rand(0, 9);
    //   return account_number;
    // } else if (account_type == "Savings") {
    //   const account_number = 1009 + rand(0, 9);
    //   return account_number;
    // }
    const account_number =
      account_type == "Checking" ? 1008 + rand(0, 9) : 1009 + rand(0, 9);
    await Accounts.create({
      account_type,
      account_number: account_number,
      member_id: id,
      curr_balance: depositamount,
      avail_balance: depositamount,
    });
    res.redirect("/members");
  } catch (e) {
    console.log("Error Encountered");
    console.log(e);
    res.redirect("/members");
  }
  // const account_number = () => {
  //   rand(0, 9);
  //   const finalNum = num.join("");
  //   // Choose account Type for Number Generation
  //   if (account_type == "Checking") {
  //     const account_number = 1008 + finalNum;
  //     console.log(account_number);
  //     return account_number;
  //   } else if (account_type == "Savings") {
  //     const account_number = 1009 + finalNum;
  //     console.log(account_number);
  //     return account_number;
  //   }
  // };
};

// Logout Function
const logout = (req, res) => {
  console.log("Logging Out");
  req.session.destroy(() => {
    res.redirect("/");
  });
};

module.exports = {
  home,
  createAccount,
  processAcctCreation,
  logout,
};
