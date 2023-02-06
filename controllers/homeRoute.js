// Route to render homepage and export
const router = require("express").Router();
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get("/assets", (req, res) => {
  res.render("assets");
});

router.get("/goalCalculator", (req, res) => {
  res.render("goalCalculator");
});

module.exports = router;
