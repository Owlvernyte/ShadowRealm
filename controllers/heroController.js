const { Hero } = require('../database/models');

const getAllHeros = async (req, res) => {
    const heros = await Hero.findAll({});
    res.json(heros);
}

const getHeroById = async (req, res) => {
    const id = req.params.id;
    const hero = await Hero.findAll({
        where: {
            id
        }
    });
    res.json(hero);
}

const addHero = async (req, res) => {
    const data = req.body;
    
    const hero = await Hero.create(data);
    res.json(hero);
}

const updateHero = async (req, res) => {
    const id = req.params.id;
    
    const data = req.body;

    const hero = await Hero.update(data, {
        where: { id },
    });
    res.json(hero);

}

const removeHero = async (req, res) => {
    const id = req.params.id;
    
    const hero = await Hero.destroy({
        where: {
            id
        }
    });
    res.json(hero);

}

module.exports = {
    getAllHeros,
    addHero,
    updateHero,
    removeHero,
    getHeroById,
}