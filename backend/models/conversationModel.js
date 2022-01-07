import Mongoose from 'mongoose'

const messageSchema = Mongoose.Schema(
  {
    to: { type: String, required: true },
    text: { type: String, required: true },
    time: { type: String, default: Date.now },
  },
  { timestamps: false }
)

const conversationSchema = Mongoose.Schema(
  {
    user1: { type: String, required: true },
    user2: { type: String, required: true },
    messages: { type: [messageSchema], default: [] },
  },
  { timestamps: true }
)

conversationSchema.index({ user1: 1, user2: 1 }, { unique: true })

const Conversation = Mongoose.model('conversation', conversationSchema)

export default Conversation
