const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const Staff = require('../models/Staffs');
const Student = require('../models/Students');

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

router.post('/api/staff/forgotpassword', 
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
      let staff = await Staff.findOne({ email });

      if(!staff){
        return res.status(422).json({error:"Staff dont exists with that email"})
    }

     

      const salt = await bcrypt.genSalt(10);
      staff.password = await bcrypt.hash(password, salt);
      await staff.save();



    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});


module.exports = router;