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

// router.get('/api/students', auth, async (req, res) => {
//     try {
//         const students = await Student.find({staff: req.staff.id}).sort({date: -1});
//         res.json(students);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//     }
// });

// router.put('/api/students/:id', auth,  async (req, res) => {
//     // res.send('Update Contacts');
//     const { name, studentid, email, password } = req.body;

//     // Build contact object
//     const contactFields = {};
//     if(name) contactFields.name = name;
//     if(studentid) contactFields.studentid = studentid;
//     if(email) contactFields.email = email;
//     if(password) contactFields.password = password;

//     try {
//         let student = await Contact.findById(req.params.id);

//         if(!student) return res.status(404).json({ msg: 'Student not found'});
        
//         // Make sure user owns contact
//         if(student.staff.toString() !== req.staff.id) {
//             return res.status(401).json({msg: 'Not Authorized'});
//         }

//         student = await Student.findByIdAndUpdate(req.params.id, 
//             { $set: contactFields },
//             { new: true});
//             res.json(student);
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error'); 
//     }
// });

module.exports = router;