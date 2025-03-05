const mongoose = require('mongoose');

// Define a schema for the user
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: {type: Date, require: true},
  gender:{type: String, required: true},
  email: { type: String, required: true },
  phone: {type:Number, require: true},
  emergencyContactName: { type: String, required: true },
  relationship: {type: String, required: true},
  emergencyPhone: {type:Number, require: true},
  sport: { type: String, required: true }, 
  skills: { type: String, required: true },
});

// Create a model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;