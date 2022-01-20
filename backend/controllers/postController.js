import Post from '../models/postModel.js'
import User from '../models/userModel.js'

async function getPosts(req, res) {
  try {
    const posts = await Post.find({})
      .populate('user', ['name'])
      .sort({ date: -1 })
    return res.json(posts)
  } catch (err) {
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function createPost(req, res) {
  try {
    const user = await User.findOne({
      _id: req.user.userId,
    }).select('-password')
    const newPost = await Post.create({
      text: req.body.text,
      name: user.name,
      user: req.user.userId,
    })
    return res.json(newPost)
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function deletePost(req, res) {
  try {
    const { postId } = req.params
    const post = await Post.findOne({ _id: postId })

    if (post.user.toString() !== req.user.userId) {
      return res.status(403).json({
        message: 'You are not authorized to delete post',
      })
    }
    await Post.deleteOne({ _id: postId })
    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function likePost(req, res) {
  try {
    const { postId } = req.params
    await Post.updateOne(
      { _id: postId },
      { $addToSet: { likes: req.user.userId } }
    )
    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function removePostLike(req, res) {
  try {
    const { postId } = req.params
    await Post.updateOne(
      { _id: postId },
      { $pull: { likes: req.user.userId } }
    )
    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function dislikePost(req, res) {
  try {
    const { postId } = req.params
    await Post.updateOne(
      { _id: postId },
      { $addToSet: { dislikes: req.user.userId } }
    )
    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function removePostDislike(req, res) {
  try {
    const { postId } = req.params
    await Post.updateOne(
      { _id: postId },
      { $pull: { dislikes: req.user.userId } }
    )
    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function getComments(req, res) {
  try {
    const { postId } = req.params
    const comments = await Post.findOne(
      { _id: postId },
      { comments: 1 }
    ).populate('user', ['name'])
    return res.json(comments)
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function createComment(req, res) {
  try {
    const { postId } = req.params
    const comment = {
      text: req.body.text,
      user: req.user.userId,
    }
    await Post.updateOne(
      { _id: postId },
      { $push: { comments: comment } }
    )
    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

async function deleteComment(req, res) {
  try {
    const { postId } = req.params
    const { commentId } = req.query
    await Post.updateOne(
      { _id: postId },
      {
        $pull: {
          comments: {
            _id: commentId,
            user: req.user.userId,
          },
        },
      }
    )
    return res.json({ message: 'success' })
  } catch (err) {
    console.error(err)
    return res
      .status(err.code || 500)
      .json({ message: err.message || 'Server error' })
  }
}

export {
  getPosts,
  createPost,
  deletePost,
  likePost,
  removePostLike,
  dislikePost,
  removePostDislike,
  getComments,
  createComment,
  deleteComment,
}
