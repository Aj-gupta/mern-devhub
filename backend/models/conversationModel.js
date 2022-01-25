import Mongoose from 'mongoose'
import {
  ValidateConversation,
  ConversationErrors,
} from '../utils/validation.js'

const messageSchema = Mongoose.Schema(
  {
    to: {
      type: String,
      required: true,
      validate: {
        validator: ValidateConversation.user,
        message: () => ConversationErrors.user,
      },
    },
    text: {
      type: String,
      required: true,
      validate: [
        (value) => ValidateConversation.text(value),
        ConversationErrors.text,
      ],
    },
    time: {
      type: String,
      default: Date.now,
      validate: {
        validator: ValidateConversation.timeStamp,
        message: () => ConversationErrors.timeStamp,
      },
    },
  },
  { timestamps: false }
)

const conversationSchema = Mongoose.Schema(
  {
    user1: {
      type: String,
      required: true,
      validate: {
        validator: ValidateConversation.user,
        message: () => ConversationErrors.user,
      },
    },
    user2: {
      type: String,
      required: true,
      validate: {
        validator: ValidateConversation.user,
        message: () => ConversationErrors.user,
      },
    },
    messages: { type: [messageSchema], default: [] },
  },
  { timestamps: true }
)

conversationSchema.index(
  { user1: 1, user2: 1 },
  { unique: true }
)

const Conversation = Mongoose.model(
  'conversation',
  conversationSchema
)

export default Conversation
