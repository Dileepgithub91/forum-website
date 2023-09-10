const { DataTypes } = require("sequelize");
const sequelize = require('../connection');

const commentTopic = sequelize.define('comments', {
    commentDesc: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    
    username:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
           },
    
    topicId: {
        type: DataTypes.STRING, 
        allowNull: false,
        unique: true
    }
});

module.exports = commentTopic;
