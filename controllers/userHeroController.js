const { UserHero, } = require('../database/models');

class UserHeroController {
    getAllUserHeros = async (req, res) => {
        const userHeros = await UserHero.findAll({
            include: [
                {
                    model: Hero,
                }
            ]
        });
        res.json(userHeros);
    }
    getUserHeroById = async (req, res) => {
        const id = req.params.id;
        const userHero = await UserHero.findAll({
            where: {
                id
            }
        });
        res.json(userHero);
    }
    addUserHero = async (req, res) => {
        const userHero = await UserHero.create(req.body);
        res.json(userHero);
    }
    updateUserHero = async (req, res) => {
        const id = req.params.id;
        const data = req.body;
        const userHero = await UserHero.update(data, {
            where: {
                id
            }
        });
        res.json(userHero);
    }
    removeUserHero = async (req, res) => {
        const id = req.params.id;
        const userHero = await UserHero.destroy({
            where: {
                id
            }
        });
        res.json(userHero);
    }

}
module.exports = new UserHeroController;