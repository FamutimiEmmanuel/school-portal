const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const Payment = require('../models/Payments');
const Student = require('../models/Students');

router.post('/api/payment', 
 [
   check('name', 'please add name').not().isEmpty(),
   check('studentid', 'please add valid studentid').not().isEmpty(),
   check('paymenttype', 'please enter a valid payment type').not().isEmpty()
 ],
  async (req, res) => {
    const errors =  validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, studentid, paymenttype } = req.body;
    try {
      let payment = await Student.findOne({ studentid });

      if(payment) {
        res.send({
            Part1: '$200',
            Part2: '$400',
            Part3: '$600',
            Part4: '$800',
            Part5: '$1000',
        })
      } else {
        res.send({
            msg:"You're not yet registered"
        })
      }

      payment = new Payment({
        name,
        studentid,
        paymenttype
      });
   
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;