import User from '../models/userModel.js'
import verifyToken from '../utils/verifyToken.js'
import generateToken from '../utils/generateToken.js'
// import Validate, { Errors } from '../utils/validation.js'

const register = async (req, res) => {
  try {
    const { name, email, username, password } = req.body

    if (!name || !email || !username || !password) {
      return res.status(400).json({ message: 'Please enter all fields' })
    }
    const userReq = {
      name: name.trim().replace('/s+/', ' '),
      email: email.trim().replace('/s+/', ''),
      username: username.trim().replace('/s+/', ''),
      password: password.trim(),
    }
    // const errors = []
    // for (const key of Object.keys(userReq)) {
    //   if (!Validate[key](userReq[key])) {
    //     errors.push({
    //       field: key,
    //       message: Errors[key],
    //     })
    //   }
    // }
    // if (errors.length !== 0) {
    //   return res.status(404).json(errors)
    // }
    const userExists = await User.findOne({
      $or: [{ email: userReq.email }, { username: userReq.username }],
    })
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create({
      email,
      username,
      name,
      password,
    })
    if (User) {
      // console.log(user)
      return res.status(201).json({
        name: user.name,
        email: user.email,
        username: user.username,
      })
    }
    return res.status(400).json({ message: 'Invalid user data' })
  } catch (err) {
    console.error(err)
    if (err.name === 'ValidationError') {
      return res.status(400).json(
        Object.keys(err.errors).map((key) => ({
          [key]: err.errors[key].message,
        }))
      )
    }
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server Error' })
  }
}

const login = async (req, res) => {
  try {
    console.log(req.body)
    const { loginId, password } = req.body
    if (!loginId || !password) {
      return res.status(404).json({ message: 'Invalid input' })
    }
    const user = await User.findOne({
      $or: [{ email: loginId }, { username: loginId }],
    })
    // console.log(user)
    if (user && (await user.matchPassword(password))) {
      const token = generateToken({
        sub: user._id,
        username: user.username,
        aud: 'devhub.in',
        name: user.name,
        email: user.email,
      })
      res.cookie('token', token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000,
        secure: process.env === 'production',
      })
      return res.json({
        name: user.name,
        email: user.email,
        username: user.username,
      })
    }
    return res.status(401).json({ message: 'Invalid email or password' })
  } catch (error) {
    console.error(error)
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Server Error' })
  }
}

const getUserInfo = async (req, res) => {
  try {
    // console.log(req.cookie)
    const token = req?.cookies?.token
    if (!token) {
      // console.log('token not defined')
      return res.status(401).json({ message: 'Not Authorized.' })
    }

    const decoded = verifyToken(token)
    // console.log(decoded)
    if (!decoded) {
      return res.status(401).json({ message: 'Not Authorized' })
    }
    const user = await User.findOne({ _id: decoded.sub })
    if (!user) {
      return res.status(502).json({ message: 'Something went wrong' })
    }
    return res.status(200).json({
      email: user.email,
      username: user.username,
      name: user.name,
    })
  } catch (error) {
    console.error(error)
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Server Error' })
  }
}

const logout = async (req, res) => {
  try {
    res.clearCookie('token')
    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.statusCode || 500)
      .json({ message: err.message || 'Server Error' })
  }
}
export { register, login, getUserInfo, logout }
