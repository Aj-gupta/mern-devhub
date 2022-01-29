import jwt from 'jsonwebtoken'

function verifyToken(token) {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    )
    if (!decoded) {
      return false
    }
    return decoded
  } catch (error) {
    return false
  }
}

export default verifyToken
