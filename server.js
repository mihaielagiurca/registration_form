const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');


const app = express()
app.use(cors());
const port = 5000
const User = require('./models/user'); 

const mongoURI = 'mongodb://localhost:27017/mydatabase';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static('public'));
app.use(express.json());

app.post('/api/users', (req, res) => {
  const {firstName, lastName, dob, gender, email, phone, emergencyContactName, relationship, emergencyPhone, sport, skills} =  req.body;
  const newUser = new User({
    firstName,
    lastName,
    dob,
    gender,
    email,
    phone,
    emergencyContactName,
    relationship,
    emergencyPhone,
    sport,
    skills,
});
newUser.save()
    .then(user => {
      res.status(201).json({ message: 'User created successfully', user });
    })
    .catch(err => {
      console.error('Error saving user:', err);
      res.status(500).json({ message: 'Error saving user' });
    });
  })
