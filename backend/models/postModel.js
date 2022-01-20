import mongoose from 'mongoose'

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
