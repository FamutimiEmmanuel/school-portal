const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const Staff = require('../models/Staffs');
const Student = require('../models/Students');

const crypto = require('crypto')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure:false,
  requireTLS: true,
  auth: {
      user: 'madalyn.bauch65@ethereal.email',
      pass: 'DgNRCsd7M6pyVMufYn'
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
              // transporter.sendMail({
              //     to:student.email,
              //     from:"no-replay@ emmanuel.com",
              //     subject:"password reset",
              //     html:`
              //     <p>You requested for password reset</p>
              //     <h5>click in this <a href="http://localhost:3000/staffresetpassword/${token}">link</a> to reset password</h5>
              //     `
              // })
              
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