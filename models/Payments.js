const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
   
   
    name: {
        type: String,
        required: true
      }, 
    studentid:{
        type:String,
        required: true
    }, 
    Paymenttype:{
        type: String,
        reguired:true
    },
   
});

module.exports = mongoose.model('payment', PaymentSchema);