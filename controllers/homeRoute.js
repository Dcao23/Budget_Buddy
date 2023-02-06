const { Liability, Asset, User } = require("../models");

// Route to render homepage and export
const router = require("express").Router();
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
router.get('/logout', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
router.get('/register', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('register');
});
router.get("/home", (req, res) => {
  res.render("home", {
    logged_in: req.session.logged_in
  });
});
router.get("/", (req, res) => {
  res.render("login", {
    logged_in: req.session.logged_in
  });
});
router.get("/goalCalculator", (req, res) => {
  res.render("goalCalculator", {
    logged_in: req.session.logged_in
  });
});

router.get("/financialGraphs", (req, res) => {
  res.render("financialGraphs", {
    logged_in: req.session.logged_in
  });
});

router.get('/budget', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const assetData = await Asset.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    const liabilityData = await Liability.findAll({
      where: {
        user_id: req.session.user_id
      }
    });
    // Serialize data so the template can read it
    const liabilities = liabilityData.map((project) => project.get({ plain: true }));
    const assets = assetData.map((project) => project.get({ plain: true }));

    console.log(assets)
    // Pass serialized data and session flag into template
    res.render('budget', {
      assets,
      liabilities,
      logged_in: req.session.logged_in

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
