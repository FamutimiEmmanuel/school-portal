const mongoose = require('mongoose');

const StaffSchema = mongoose.Schema({
   
    student: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'students'
      },
    name: {
        type: String,
        required: true
      },  
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    picture: {
      type: String
    },
    resetToken:String,
    expireToken:Date,
   
});

module.exports = mongoose.model('staff', StaffSchema);