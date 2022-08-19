const router = require('express').Router();

const heroController = require('../controllers/heroController');

router.get('/', heroController.getAllHeros);
router.get('/:id', heroController.getHeroById);
router.post('/', heroController.addHero);
router.put('/:id', heroController.updateHero);
router.delete('/:id', heroController.removeHero);

module.exports = router;