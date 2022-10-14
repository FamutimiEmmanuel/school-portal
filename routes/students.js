const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const Student = require('../models/Students');
const studentauth = require('../middleware/studentauth');

// const nodemailer = require('nodemailer')
// const sendgridTransport = require('nodemailer-sendgrid-transport')

//


// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth:{
//         api_key:"SG.FahleT6-RXSjvaQ1ukeAOA.KkC5-CcCpTk9G7OPOkkatONozqA316pooWqK8gupos"
//     }
// }))

// var mailOptions = {
//   from: '"Example Team" <from@example.com>',
//   to: 'user1@example.com, user2@example.com',
//   subject: 'Nice Nodemailer test',
//   text: 'Hey there, it’s our first message sent with Nodemailer ;) ',
//   html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
// };


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

      // transporter.sendMail({
      //               to:student.email,
      //               from:"no-reply@emmanuel famutimi high school.com",
      //               subject:"signup success",
      //               html:"<h1>welcome to our school</h1>"
      //           })

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

router.post('/api/students/forgotpassword', 
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
      let student = await Student.findOne({ email });

      if(!student){
        return res.status(422).json({error:"Student dont exists with that email"})
    }

     

      const salt = await bcrypt.genSalt(10);
      student.password = await bcrypt.hash(password, salt);
      await student.save();

      res.json(student);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
});




module.exports = router;