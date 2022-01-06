import mongoose from 'mongoose'

const connectDB = async function () {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log(`MongoDB Connected`)
  } catch (err) {
    console.error(`Error: ${err.message}`)
    process.exit(1)
  }
}

export default connectDB
