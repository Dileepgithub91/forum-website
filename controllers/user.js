const transporter = require('../nodeMailer/mailer');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel')


// ..................registerUser..............

var registerUser = async (req, res) => {
  const data=req.body;
  const { name, username, email, password } = data;//req.body

  try {
    if (!name) {
      return res.status(400).send({ status: false, message: "Missing name fields" });
    }
    if (!username) {
      return res.status(400).send({ status: false, message: "Missing username fields" });
    }
    if (!email) {
      return res.status(400).send({ status: false, message: "Missing email fields" });
    }
    if (!password) {
      return res.status(400).send({ status: false, message: "Missing password fields" });
    }
   
    const created = await User.create({data });

    // create random Token
    const rand = () => {
      return Math.random().toString(36).substr(2); // remove `0.`
    };

    const generateToken = () => {
      return rand() + rand(); // to make it longer
    };

    const token = generateToken();
      //console.log("Dileep",created)

    //update token
     await User.update( {verificationToken: token}, 
      {
          where: {id:created.id },
      })

    await transporter.sendMail({
      from: 'dileepkm156@gmail.com',
      to: created.email,
      subject: 'Welcome to Our Website!',
      html: `<a href='http://localhost:8800/verify-email?token=${token}'>click here</a>`
    });

    return res.status(201).send({ status: true, message: "User Registered Successfully", user: created });
  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).send({ status: false, error: "Server Error",});
  }
};




// ..........login User......................

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username) {
    res.status(400).send({ status: false, message: "Missing username" });
    return;
  }

  if (!password) {
    res.status(400).send({ status: false, message: "Missing password" });
    return;
  }

  try {
    const user = await User.findOne({
      where: {
        username,
        password,
      },
    });

    if (user) {
      const token = jwt.sign({ username: user.username }, 'DileepKumar', { expiresIn: '8h' });
      res.setHeader("token", token);
  
      res.status(200).send({ status: true, message: 'Successfully Generated Token', data: user });
    } else {
      res.status(400).send({ status: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).send({ status: false, error: 'Error in login user', error });
  }
};

//............getUser....................

var getUser = async (req, res) => {
  const username = req.username
  const data = await User.findOne({
      where: { username: username}

  });
  try {
      res.status(200).send({ status: true, message: "Get user Successfully", User: data });
  }
  catch (error) {
      res.status(500).send({ status: false, error: "Server Error", error });
  }
}


//.............logOut User.....................

const logoutUser = (req, res) => {
  res.status(200).send({ status: true, message: "Logout successful" });

}

module.exports = { registerUser, getUser, loginUser, logoutUser };














 




