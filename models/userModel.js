const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  email: {
    type: String,
    required: [true, "Please fill this field!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please fill this field!"],
    minLength: 6,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Something went wrong!",
    },
  },
  nationality: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  organisation: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  truck: [
    {
      type: Schema.Types.ObjectId,
      ref: "truck",
    },
  ],
  container: [
    {
      type: Schema.Types.ObjectId,
      ref: "container",
    },
  ],
  isbanned: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    return next()
  }
  this.password = await bcrypt.hash(this.password, 12)
  this.passwordConfirm = undefined; 
  next()
})

userSchema.methods.correctPassword = async function(typedPassword, originalPassword){
  return await bcrypt.compare(typedPassword, originalPassword)
}

const User = mongoose.model("user", userSchema)

module.exports = User;
