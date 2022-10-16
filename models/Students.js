const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    studentid: {
        type: String,
        required: true,
        unique: true
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

module.exports = mongoose.model('student', StudentSchema);