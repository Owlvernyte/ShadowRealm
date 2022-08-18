
const { INTEGER, VIRTUAL } = require('sequelize');
module.exports = (sequelize) => {
    const Hero = require('./Hero')(sequelize);
    const UserHero = sequelize.define('UserHero', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        heroId: { type: INTEGER, references: { model: Hero, key: 'id' } },
        level: { type: INTEGER, defaultValue: 1 },
        amount: { type: INTEGER, defaultValue: 1 },
        star: {
            type: VIRTUAL,
            get() {
                const round = Math.floor(this.getDataValue('amount') / 3);
                return Math.log(3) / Math.log(round);
            },
            defaultValue: 1,
        }
    });
    Hero.hasMany(UserHero, {
        sourceKey: 'id',
        foreignKey: 'heroId',
    });
    UserHero.belongsTo(Hero);
    return UserHero;
}
