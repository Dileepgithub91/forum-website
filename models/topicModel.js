const { DataTypes } = require("sequelize");
const sequelize = require('../connection');

const commentTopic = sequelize.define('topics', {
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    img: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    }
});

module.exports = commentTopic;
