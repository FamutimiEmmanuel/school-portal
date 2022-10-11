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


module.exports = router;