const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    admin: {
      type: Boolean,
      required: false,
    },
  },
});


UserSchema.pre('save', function (next) {
  if (this.password.length === 60 && this.password[0] === '$') { // already encrypted
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    next();
  });
});


UserSchema.statics.authenticate = function (email, password, cb) {
  this.findOne({ email }, (err, user) => {
    if (err) {
      return cb(500);
    }

    if (!user) {
      return cb(404);
    }

    return bcrypt.compare(password, user.password, (err, result) => {
      if (result !== true) {
        return cb(403);
      }
      cb(null, user);
    });
  });
};


UserSchema.statics.findByIdOrEmail = function (emailOrId, cb) {
  if (emailOrId.split('@').length === 2) {
    return this.findOne({ email: emailOrId }, cb);
  }
  return this.findById(emailOrId, cb);
};


UserSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('User', UserSchema);
