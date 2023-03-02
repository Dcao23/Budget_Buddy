const router = require('express').Router();
const Liability  = require('../../models/Liability');

router.get('/', async (req, res) => {
    try {
        const liabilitiesData = await Liability.findAll();
        res.status(200).json(liabilitiesData);
    } catch (err) {
        res.status(500).json(err);
    }

});
router.get('/:id', async (req, res) => {
    try {
        const liabilitiesData = await Liability.findAll({
            where: {
              id: req.params.id,
              user_id: req.session.user_id,
            },
          });
        res.status(200).json(liabilitiesData);
    } catch (err) {
        res.status(500).json(err);
    }

});
router.post('/', async (req, res) => {
    try {
        const newLiability = await Liability.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        console.log("added")
        res.status(200).json(newLiability);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const liabilityData = await Liability.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!liabilityData) {
            res.status(404).json({ message: 'Required input field' });
            return;
        }
        res.status(200).json(liabilityData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;