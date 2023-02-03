const router = require('express').Router();
const { FinancialGoal } = require('../../models/FinancialGoal')

//need get route
router.get('/', async (req, res) => {
    try {
        const financialRouteData = await FinancialGoal.findAll();
        res.status(200).json(financialRouteData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newFinances = await Finances.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newFinances);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const financesData = await Finances.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!financesData) {
            res.status(404).json({ message: 'Required input field' });
            return;
        }
        res.status(200).json(financesData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;