const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const Admin = require('../models/Admin');
const Student = require('../models/Students');
const Staff = require('../models/Staffs');
const adminauth = require('../middleware/adminauth');

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

router.post('/api/admin/register', 
 [
   check('adminid', 'please enter a valid adminid').not().isEmpty(),
   check('password', 'please enter a password with 6 or more characters').isLength({ min: 6})
 ],
  async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {adminid, password, picture } = req.body;
    try {
      let admin = await Admin.findOne({ adminid });

      if(admin) {
        return res.status(400).json({ msg: 'Admin already exists'});
      }

      admin = new Admin({
        adminid,
        password,
        picture
      });

      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);
      await admin.save();

      const payload = {
        admin: {
          id:admin._id
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

router.post('/api/admin/forgotpassword', 
 [
   
   check( 'email', 'please include a valid email').isEmail(),
   check('password', 'please enter a password with 6 or more characters').isLength({ min: 6})
 ],
  async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let admin = await Admin.findOne({ email });

      if(!admin){
        return res.status(422).json({error:"Admin dont exists with that email"})
    }

     

      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);
      await admin.save();



    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});

router.delete('/api/staff/:id', adminauth, async (req, res) => {
  // res.send('Delete contacts');
  try {
      
    let staff = await Staff.findOne({email:req.params.id});
      await staff.remove();

          res.json({ msg: 'staff removed' });
  } catch (err) {
      console.error(err.message);
    
  }
});

router.delete('/api/students/:id', adminauth, async (req, res) => {
  // res.send('Delete contacts');
  try {
      
    let student = await Student.findOne({studentid:req.params.id});
  
      await student.remove();
    

          res.json({ msg: 'Contact removed' });
  } catch (err) {
      console.error(err.message);
    
  }
});

router.post('/api/admin/forgotpassword',(req,res)=>{
  crypto.randomBytes(32,(err,buffer)=>{
      if(err){
          console.log(err)
      }
      const token = buffer.toString("hex")
      Admin.findOne({email:req.body.email})
      .then(admin=>{
          if(!admin){
              return res.status(422).json({error:"Admin dont exists with that email"})
          }
          admin.resetToken = token
          admin.expireToken = Date.now() + 3600000
          admin.save().then((result)=>{
              // transporter.sendMail({
              //     to:student.email,
              //     from:"no-replay@ emmanuel.com",
              //     subject:"password reset",
              //     html:`
              //     <p>You requested for password reset</p>
              //     <h5>click in this <a href="http://localhost:3000/adminresetpassword/${token}">link</a> to reset password</h5>
              //     `
              // })
              
              res.json({message:"check your email"})
          })

      })
  })
})

router.post('/api/admin/newpassword',(req,res)=>{
 const newPassword = req.body.password
 const sentToken = req.body.token
 Admin.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
 .then(admin=>{
     if(!admin){
         return res.status(422).json({error:"Try again session expired"})
     }
     bcrypt.hash(newPassword,12).then(hashedpassword=>{
        admin.password = hashedpassword
        admin.resetToken = undefined
        admin.expireToken = undefined
        admin.save().then((savedadmin)=>{
            res.json({message:"password updated success"})
        })
     })
 }).catch(err=>{
     console.log(err)
 })
})


module.exports = router;