
const { INTEGER, VIRTUAL } = require('sequelize');
module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        
    });
    
    return User;
}
