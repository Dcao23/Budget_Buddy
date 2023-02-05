// Route to render homepage and export
const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/budget", (req, res) => {
  res.render("budget");
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
