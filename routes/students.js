const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const Student = require('../models/Students');
const studentauth = require('../middleware/studentauth');
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
      type:'OAuth2',
      user:'olamide.famutimi@gmail.com',
      clientId:'56440586722-3t6shacl45okg4rf8ei6oa0ata2482ui.apps.googleusercontent.com',
      clientSecret:'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',
      refreshToken:'1//04Kj26lfqzqNhCgYIARAAGAQSNwF-L9IrORTrsd8wQwrqwKHyFRGMWL8qlrtNwq7_bU5_SthxAVZRi39ekgyKGg7OXrYHQ0koG5I',
      accessToken:'ya29.a0Aa4xrXNKzbhnTHnBtzc6-D4vb-VrHUa2qNZXN0nH-QHrwzMWhN6hrnCgHNsYn_ziUupe6i6knt_ohODuWNmkZS3QbwUw15pmHMZUstII2nTDzb5R8NkkMIJV5nwRm9H9IWoIy6YgvRehwVJGgXnTe3wXtqxTaCgYKATASARESFQEjDvL9ofU7LVbJ_kl1k2bsoxzxkw0163'
  }
});



router.post('/api/students/register', 
 [
   check('name', 'please add name').not().isEmpty(),
   check('studentid', 'please enter a valid studentid').not().isEmpty(),
   check( 'email', 'please include a valid email').isEmail(),
   check('password', 'please enter a password with 6 or more characters').isLength({ min: 6})
 ],
  async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, studentid, email, password, picture } = req.body;
    try {
      let student = await Student.findOne({ email });

      if(student) {
        return res.status(400).json({ msg: 'Student already exists'});
      }

      student = new Student({
        name,
        studentid,
        email,
        password,
        picture
      });

      const salt = await bcrypt.genSalt(10);
      student.password = await bcrypt.hash(password, salt);
      await student.save();
      
      transporter.sendMail({
        from: "no-reply@emmanuel famutimi high school.com",
        to: student.email,
        subject:"signup success",
        // text: 'Glad to have you here',
        html: "<h1>welcome to our school</h1>"
                  })

      const payload = {
        student: {
          id:student._id
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
      console.log('done')
    }
});

router.post('/api/students/forgotpassword',(req,res)=>{
  crypto.randomBytes(32,(err,buffer)=>{
      if(err){
          console.log(err)
      }
      const token = buffer.toString("hex")
      Student.findOne({email:req.body.email})
      .then(student=>{
          if(!student){
              return res.status(422).json({error:"Student dont exists with that email"})
          }
          student.resetToken = token
          student.expireToken = Date.now() + 3600000
          student.save().then((result)=>{
              transporter.sendMail({
                  to:student.email,
                  from:"no-replay@ emmanuel.com",
                  subject:"password reset",
                  html:`
                  <p>You requested for password reset</p>
                  <h5>click in this <a href="http://localhost:3000/studentresetpassword/${token}">link</a> to reset password</h5>
                  `
              })
              
              res.json({message:"check your email"})
          })

      })
  })
})

router.post('/api/students/newpassword',(req,res)=>{
 const newPassword = req.body.password
 const sentToken = req.body.token
 Student.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
 .then(student=>{
     if(!student){
         return res.status(422).json({error:"Try again session expired"})
     }
     bcrypt.hash(newPassword,12).then(hashedpassword=>{
        student.password = hashedpassword
        student.resetToken = undefined
        student.expireToken = undefined
        student.save().then((savedstudent)=>{
            res.json({message:"password updated success"})
        })
     })
 }).catch(err=>{
     console.log(err)
 })
})
module.exports = router;