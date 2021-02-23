const nodemailer = require('nodemailer');

const sendEmail = (req, res) => {
  const userEmail = process.env.User
  const passwordEmail = process.env.Password
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${userEmail}`,
          pass: `${passwordEmail}`
        }
      });
      
      let mailOptions = {
        from: req.body.email,
        to: 'mahermarawi92@gmail.com',
        subject: 'Portfolio Message',
        html: `<h3>this is a message from your portfolio</h3><p>${req.body.message}</p>
        <h3>${req.body.name}</h3><br><h3>${req.body.email}</h3>`
        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
          res.send('Message has been sent')
        }
      });

}
module.exports = { sendEmail }