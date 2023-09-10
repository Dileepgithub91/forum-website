const {DataTypes}= require("sequelize")
const sequelize=require('../connection')


const User = sequelize.define('user', {

    name: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique:false,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:false
     },
     
     email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
       },

       password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:false
       },

       verificationToken:{
        type:DataTypes.STRING,
        allowNull:true
       },
       isVerified:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
       }
  });





module.exports=User;