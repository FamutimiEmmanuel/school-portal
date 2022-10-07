const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const Student = require('../models/Students');

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
    }
});

module.exports = router;