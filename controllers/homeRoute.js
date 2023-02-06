// Route to render homepage and export
const router = require("express").Router();
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get("/home", (req, res) => {
  res.render("home",{
    logged_in: req.session.logged_in 
  });
});

router.get("/goalCalculator", (req, res) => {
  res.render("goalCalculator",{
    logged_in: req.session.logged_in 
  });
});

router.get("/financialGraphs", (req, res) => {
  res.render("financialGraphs",{
    logged_in: req.session.logged_in 
  });
});

module.exports = router;
