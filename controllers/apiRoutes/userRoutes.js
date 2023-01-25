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



