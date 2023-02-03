
const router = require('express').Router();
<<<<<<< Updated upstream
const { user } = require();
=======
const User = require('../../models/User');


 //TO DO: need to add get route
 router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});
>>>>>>> Stashed changes

router.post('/', async (req, res) => {
    try {
        const userData = await user.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
<<<<<<< Updated upstream
        const userData = await User.find({ where: {email: req.body.email} });
=======
        const userData = await User.findOne({ where: {email: req.body.email} });
>>>>>>> Stashed changes
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email try again' });
            return;
        }
        const userPassword = await userData.checkPassword(req.body.password);
        if (!userPassword) {
<<<<<<< Updated upstream
            res.status(400).json({ message: 'Incorrect email/password try again'})
=======
            res.status(400).json({ message: 'Incorrect password try again'})
>>>>>>> Stashed changes
            return;
        }
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  

