const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    adminid: {
        type: String,
        required: true
        // unique: true
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

module.exports = mongoose.model('admin', AdminSchema);