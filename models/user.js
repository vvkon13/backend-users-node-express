const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    select: false,
  },
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male','female', ''],
    default: '',
  },
  img: {
    data: Buffer,
    contentType: String,
 }
});

const User = mongoose.model('user', userSchema);

module.exports = {
  User,
  userSchema,
};
