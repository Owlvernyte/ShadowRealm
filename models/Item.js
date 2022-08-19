const { DataTypes : { INTEGER, STRING } } = require('sequelize');

module.exports = (sequelize) => {
    
    const Item = sequelize.define('Item', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: STRING,
        quantity: { type: INTEGER, defaultValue: 1 },
        durability: { type: INTEGER, defaultValue: 100 }
    });
    
    return Item;
}