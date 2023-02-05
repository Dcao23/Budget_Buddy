const router = require('express').Router();
const { Asset } = require('../../models');

router.get('/', async (req, res) => {
  try {
      const AssetData = await Asset.findAll();
      res.status(200).json(AssetData);
  } catch (err) {
      res.status(500).json(err);
  }

});
router.post('/', async (req, res) => {
    try {
      const newAsset = await Asset.create({
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
      const assetData = await Asset.destroy({
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