const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  try {
    const token = req.headers["token"];
    if (!token) {
      return res.status(400).send({ status: false, message: "Token is Required" });
    }
    
    jwt.verify(token, 'DileepKumar', (err, result) => {
      if (err) {
        return res.status(401).send({ status: false, message: "Token is Invalid" });
      } else {
        req.username = result.username;
        //console.log("auth",req.username)
        next(); 
      }
    });
  } catch (error) {
    res.status(500).send({ status: false, error: "Server Error", error });
  }
};

module.exports = authentication;
