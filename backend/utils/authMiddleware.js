/* eslint-disable consistent-return */
import verifyToken from './verifyToken.js'

export default function auth(req, res, next) {
  try {
    const token = req?.cookies?.token
    if (!token) {
      return res.status(401).json({ message: 'Not Authorized.' })
    }

    const decoded = verifyToken(token)
    if (!decoded) {
      return res.status(401).json({ message: 'Not Authorized' })
    }
    req.user = {
      userId: decoded.sub,
      email: decoded.email,
      username: decoded.username,
      name: decoded.name,
    }
    next()
  } catch (err) {
    console.error(err)
    return res.status(401).json({ message: 'Not Authorized.' })
  }
}
