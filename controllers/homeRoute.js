const { Liability, Asset } = require("../models");

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

router.get('/budget', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Liability.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });
      // Get all projects and JOIN with user data
      const projectData1 = await Asset.findAll();
    
    // Serialize data so the template can read it
    const projects1 = projectData1.map((project) => project.get({ plain: true }));
    const projects = projectData1.map((project) => project.get({ plain: true }));
    
    // Pass serialized data and session flag into template
    res.render('budget', { 
      projects, 
      projects1,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
