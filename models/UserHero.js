
const { INTEGER, VIRTUAL } = require('sequelize');
module.exports = (sequelize) => {
    const UserHero = sequelize.define('UserHero', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
    
    return UserHero;
}
