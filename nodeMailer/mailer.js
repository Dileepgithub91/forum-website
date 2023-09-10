
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'dileepkm156@gmail.com',
    pass: 'nejuahnagtuthlxg',
  },
});

module.exports = transporter;
