const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const Staff = require('../models/Staffs');
const Student = require('../models/Students');

const nodemailer = require('nodemailer');
const {google} = require('googleapis');
// const sendgridTransport = require('nodemailer-sendgrid-transport')

const OAuth2 = google.auth.OAuth2;

const myOAuth2Client = new OAuth2(
  '56440586722-3t6shacl45okg4rf8ei6oa0ata2482ui.apps.googleusercontent.com',
  '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',
  'https://developers.google.com/oauthplayground'
)

myOAuth2Client.setCredentials({
  refresh_token:'1//04Kj26lfqzqNhCgYIARAAGAQSNwF-L9IrORTrsd8wQwrqwKHyFRGMWL8qlrtNwq7_bU5_SthxAVZRi39ekgyKGg7OXrYHQ0koG5I'
})

const myAccessToken = myOAuth2Client.getAccessToken()

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
      type:'OAuth2',
      user:'olamide.famutimi@gmail.com',
      clientId:'56440586722-3t6shacl45okg4rf8ei6oa0ata2482ui.apps.googleusercontent.com',
      clientSecret:'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',
      refreshToken:'1//04Kj26lfqzqNhCgYIARAAGAQSNwF-L9IrORTrsd8wQwrqwKHyFRGMWL8qlrtNwq7_bU5_SthxAVZRi39ekgyKGg7OXrYHQ0koG5I',
      // accessToken:'ya29.a0Aa4xrXNKzbhnTHnBtzc6-D4vb-VrHUa2qNZXN0nH-QHrwzMWhN6hrnCgHNsYn_ziUupe6i6knt_ohODuWNmkZS3QbwUw15pmHMZUstII2nTDzb5R8NkkMIJV5nwRm9H9IWoIy6YgvRehwVJGgXnTe3wXtqxTaCgYKATASARESFQEjDvL9ofU7LVbJ_kl1k2bsoxzxkw0163',
      accessToken:myAccessToken
  }
});


router.post('/api/staff/register', 
 [
   check('name', 'please add name').not().isEmpty(),
   check( 'email', 'please include a valid email').isEmail(),
   check('password', 'please enter a password with 6 or more characters').isLength({ min: 6})
 ],
  async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, picture } = req.body;
    try {
      let staff = await Staff.findOne({ email });

      if(staff) {
        return res.status(400).json({ msg: 'Staff already exists'});
      }

      staff = new Staff({
        name,
        email,
        password,
        picture
      });

      const salt = await bcrypt.genSalt(10);
      staff.password = await bcrypt.hash(password, salt);
      await staff.save();

      transporter.sendMail({
        from: "no-reply@emmanuel famutimi high school.com",
        to: staff.email,
        subject:"signup success",
        text: 'Glad to have you here',
        html: "<h1>welcome to our school</h1>"
                  })

      const payload = {
        staff: {
          id:staff._id
        }
      }
      jwt.sign(payload, config.get('jwtsecret'), {
        expiresIn:36000
      }, (err, token) => {
        if(err) throw err;
        res.json({token});
      });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


router.post('/api/staff/forgotpassword',(req,res)=>{
  crypto.randomBytes(32,(err,buffer)=>{
      if(err){
          console.log(err)
      }
      const token = buffer.toString("hex")
      Staff.findOne({email:req.body.email})
      .then(staff=>{
          if(!staff){
              return res.status(422).json({error:"Staff dont exists with that email"})
          }
          staff.resetToken = token
          staff.expireToken = Date.now() + 3600000
          staff.save().then((result)=>{
              transporter.sendMail({
                  to:staff.email,
                  from:"no-replay@ emmanuel.com",
                  subject:"password reset",
                  html:`
                  <p>You requested for password reset</p>
                  <h5>click in this <a href="http://emmanuel-school-portal.herokuapp.com/staffresetpassword/${token}">link</a> to reset password</h5>
                  `
              })
              
              res.json({message:"check your email"})
          })

      })
  })
})

router.post('/api/staff/newpassword',(req,res)=>{
 const newPassword = req.body.password
 const sentToken = req.body.token
 Staff.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
 .then(staff=>{
     if(!staff){
         return res.status(422).json({error:"Try again session expired"})
     }
     bcrypt.hash(newPassword,12).then(hashedpassword=>{
        staff.password = hashedpassword
        staff.resetToken = undefined
        staff.expireToken = undefined
        staff.save().then((savedstudent)=>{
            res.json({message:"password updated success"})
        })
     })
 }).catch(err=>{
     console.log(err)
 })
})


module.exports = router;