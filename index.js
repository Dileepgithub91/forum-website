const express = require("express");
const app=express();
const route=require('./routes/route')
const port=8800;


app.use(express.json())

app.use('/',route)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});