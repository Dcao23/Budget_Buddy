const router = require('express').Router();
const { Assets } = require('../apiRoutes')

router.post('/', async (req, res) => {
    try {
      const newAsset = await asset.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newAsset);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const assetData = await asset.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!assetData) {
        res.status(404).json({ message: 'Required input field' });
        return;
      }
      res.status(200).json(assetData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;