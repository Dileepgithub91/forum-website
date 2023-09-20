const Sequelize = require('sequelize');

const sequelize = new Sequelize("sequelize_forum", "root", "Dileep91@", {
  dialect: "mysql",
  host:"localhost",
  port:3306,
});

sequelize.authenticate()
  .then(() => {
    console.log("Connection has been successfully.");
    
    return sequelize.sync();
    
  })

   .then(() => {
    console.log("Table and model synced successfully");
   })

  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });



  module.exports=sequelize

















































































































































