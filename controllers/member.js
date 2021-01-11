const { Members, Accounts, Transactions } = require("../models");

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
  // Making 2 DB calls - Need to reduce
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
    let { account_name } = req.body;
    const { id } = req.session.user;
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
    // console.log(rand(0, 9));
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
    account_name == "" && account_type == "Checking"
      ? (account_name = "Personal Checking")
      : "";
    account_name == "" && account_type == "Savings"
      ? (account_name = "Personal Savings")
      : "";
    await Accounts.create({
      account_type,
      account_name,
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

const acctDetails = async (req, res) => {
  const { id } = req.params;
  // Making 2 DB calls - Need to reduce
  const acctinfo = await Accounts.findByPk(id);
  const transaction = await Transactions.findAll({
    where: {
      account_number: acctinfo.account_number,
    },
  });
  res.render("members/AccountDetails", {
    locals: {
      acctinfo,
      transaction,
    },
    ...globalPartials,
  });
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
  acctDetails,
  logout,
};
