const { DataTypes: { INTEGER, STRING } } = require('sequelize');

module.exports = (sequelize) => {
    const Hero = sequelize.define('Hero', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: STRING,
        hpRate: {
            type: INTEGER,
            defaultValue: 100
        },
        atkRate: {
            type: INTEGER,
            defaultValue: 0
        },
        defRate: {
            type: INTEGER,
            defaultValue: 0
        }
    });
    
    return Hero;
}
