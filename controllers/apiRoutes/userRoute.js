const User = require('../../models/User');

const router = require('express').Router();
const { user } = require();

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
        const userData = await User.find({ where: {email: req.body.email} });
        if (!userData) {
            res.status(400).json({ message: 'Incorrect email/password try again' });
            return;
        }
        const userPassword = await userData.checkPassword(req.body.Password);
        if (!userPassword) {
            res.status(400).json({ message: 'Incorrect email/password try again'})
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
  
