const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const adminauth = require('../middleware/adminauth');
const staffauth = require('../middleware/staffauth');
const studentauth = require('../middleware/studentauth');
const Staff = require('../models/Staffs');  
const Student = require('../models/Students');  
const Admin = require('../models/Admin');  



router.get('/api/adminauth', adminauth, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin.id).select('-password');
    res.json(admin);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/api/staffauth', staffauth, async (req, res) => {
  try {
    const staff = await Staff.findById(req.staff.id).select('-password');
    res.json(staff);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.get('/api/studentauth', studentauth, async (req, res) => {
  try {
    const student = await Student.findById(req.student.id).select('-password');
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/api/student/login',
[
    check('email', 'please include a valid email').isEmail(),
    check('password', 'password is required').exists().isLength({ min: 5, max:10 })
]
,
 
 async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password} = req.body;

    try {
       let student = await Student.findOne({ email });
        if(!student) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        
        const ismatch = await bcrypt.compare(password, student.password);
        if(!ismatch) {
            return res.status(400).send('invalid credentials');
        };


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


router.post('/api/staff/login',
[
    check('email', 'please include a valid email').isEmail(),
    check('password', 'password is required').exists().isLength({ min: 5, max:10 })
]
,
 
 async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password} = req.body;

    try {
       let staff = await Staff.findOne({ email });
        if(!staff) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        
        const ismatch = await bcrypt.compare(password, staff.password);
        if(!ismatch) {
            return res.status(400).send('invalid credentials');
        };


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
router.post('/api/admin/login',
[
    check('adminid', 'please include a valid id').not().isEmpty(),
    check('password', 'password is required').exists().isLength({ min: 5, max:10 })
]
,
 
 async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { adminid, password} = req.body;
  
    try {
       let admin = await Admin.findOne({ adminid });
        if(!admin) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }
        
        const ismatch = await bcrypt.compare(password, admin.password);
        if(!ismatch) {
            return res.status(400).send('invalid credentials');
        };


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

module.exports = router;