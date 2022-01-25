import mongoose from 'mongoose'
import {
  ValidatePost,
  PostErrors,
} from '../utils/validation.js'

const { Schema } = mongoose

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
    validate: {
      validator: ValidatePost.text,
      message: () => PostErrors.text,
    },
  },
  likes: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  dislikes: [
    {
      type: Schema.Types.ObjectId,
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      text: {
        type: String,
        required: true,
        validate: {
          validator: ValidatePost.text,
          message: () => PostErrors.commentText,
        },
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Post', PostSchema)
