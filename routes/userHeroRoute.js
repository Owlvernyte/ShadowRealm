const router = require('express').Router();

const userHeroController = require('../controllers/userHeroController');

router.get('/', userHeroController.getAllUserHeros);
router.get('/:id', userHeroController.getUserHeroById);
router.post('/', userHeroController.addUserHero);
router.put('/:id', userHeroController.updateUserHero);
router.delete('/:id', userHeroController.removeUserHero);

module.exports = router;