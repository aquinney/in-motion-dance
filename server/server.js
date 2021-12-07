const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

// production assets
app.use(express.static('client/build'));

// this should tell heroku where to find production build
const root = require('path').join(__dirname, '../', 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

// const path = require('path');
// app.get('*', (req, res) => {
// res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
// });


let transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
   type: "OAuth2",
   user: process.env.EMAIL,
   pass: process.env.WORD,
   clientId: process.env.OAUTH_CLIENTID,
   clientSecret: process.env.OAUTH_CLIENT_SECRET,
   refreshToken: process.env.OAUTH_REFRESH_TOKEN,
 },
});

transporter.verify((err, success) => {
 err
   ? console.log(err)
   : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post("/send", function (req, res) {
 let mailOptions = {
   from: `${req.body.mailerState.email}`,
   to: process.env.EMAIL,
   subject: `Message from: ${req.body.mailerState.email}`,
   text: `Sender: ${req.body.mailerState.name}
          Message: ${req.body.mailerState.message}

          Note: if these are empty, the parent simply filled out a contact form.
          Student's Name: ${req.body.mailerState.studentName}
          Student's Age: ${req.body.mailerState.studentAge}
          Desired Class: ${req.body.mailerState.studentClass}
          Parent's Phone Number: ${req.body.mailerState.parentPhone}`,

 };

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});

// set up port 
const port = process.env.PORT || 5000;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});
