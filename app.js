const { UserHero, Hero } = require('./database/models');
(async () => {
    const Johnny = await Hero.create({name : 'Johnny'});
    // const John = await UserHero.create({level: 1, heroId: Johnny.id});
})
