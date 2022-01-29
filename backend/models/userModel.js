import Mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import Validate, { Errors } from '../utils/validation.js'

const userSchema = Mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'name required'],
      validate: {
        validator: Validate.name,
        message: () => Errors.name,
      },
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: Validate.email,
        message: () => Errors.email,
      },
      required: [true, 'email required'],
    },
    username: {
      type: String,
      unique: [true, 'username required'],
      validate: [
        (value) => Validate.username(value),
        Errors.username,
      ],
    },
    password: {
      type: String,
      required: [true, 'password required'],
      validate: {
        validator: Validate.password,
        message: () => Errors.password,
      },
    },
  },
  { timestamps: true }
)

userSchema.methods.matchPassword = async function (
  enteredPassword
) {
  const res = await bcrypt.compare(
    enteredPassword,
    this.password
  )
  return res
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = Mongoose.model('User', userSchema)

export default User
