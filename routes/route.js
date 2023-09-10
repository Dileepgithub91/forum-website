const jwt=require('jsonwebtoken');
const authentication=require('../middleware/authentication');
const express = require("express");
const router = express.Router();
const {registerUser,loginUser,getUser, logoutUser} = require("../controllers/user");
const {addComment,deleteComment} = require('../controllers/comment');
const { deleteTopic, addTopic } = require('../controllers/topic');
const verifyEmail = require('../controllers/verify-email');



// User
router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.get("/getUser",authentication, getUser);
router.delete("/logoutUser",logoutUser);

// Topic
router.post('/createTopic',authentication,addTopic ); 
router.delete('/deleteTopic',authentication, deleteTopic);

// Comment
router.post('/addComment',authentication,addComment); 
router.delete('/deleteComment',authentication, deleteComment);

//.....Email verification........
router.get('/verify-email',verifyEmail)

module.exports = router;
