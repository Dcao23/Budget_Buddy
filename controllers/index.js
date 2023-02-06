const router = require("express").Router();
const api = require("./apiRoutes");
const homeRoutes = require("./homeRoute");

router.use("/", homeRoutes);
router.use("/api", api);

module.exports = router;
