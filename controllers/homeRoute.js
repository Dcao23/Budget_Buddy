// Route to render homepage and export
const router = require("express").Router();
router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/assets", (req, res) => {
  res.render("assets");
});

router.get("/goalCalculator", (req, res) => {
  res.render("goalCalculator");
});

router.get("/financialGraphs", (req, res) => {
  res.render("financialGraphs");
});

router.get("/budgetgraph", (req, res) => {
  res.render("budgetgraph");
});

module.exports = router;
