/* eslint-disable no-param-reassign */
import Conversation from '../models/conversationModel.js'
import User from '../models/userModel.js'
import { checkUser } from '../utils/users.js'

async function getMessages(req, res) {
  try {
    const { username: firstUser } = req.user
    const { username: secondUser } = req.params
    // const firstUser = 'aj-gupta'
    // // const secondUser = 'hr-tech'
    const messages = await Conversation.aggregate([
      {
        $match: {
          $or: [
            { user1: firstUser, user2: secondUser },
            { user1: secondUser, user2: firstUser },
          ],
        },
      },
      { $unwind: '$messages' },
      {
        $project: {
          _id: 0,
          to: '$messages.to',
          text: '$messages.text',
          time: '$messages.time',
        },
      },
      // { $sort: { time: -1 } },
      { $limit: 20 },
    ])

    return res.status(200).json({ messages })
  } catch (error) {
    console.error(error)
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).map(
        (key) => ({
          [key]: error.errors[key].message,
        })
      )
      return res
        .status(400)
        .json({ message: 'Validation Error', errors })
    }
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Server Error' })
  }
}

async function sendMessage(req, res) {
  try {
    const { username: sender } = req.user
    console.log(sender)
    const { username: reciever, text } = req.body

    const message = {
      to: reciever,
      text,
    }
    console.log(sender, reciever)
    if (sender === reciever) {
      return res.status(400).json({
        message: "sender and reciever can't be same",
      })
    }
    const con = await Conversation.findOne(
      {
        $or: [
          { user1: sender, user2: reciever },
          { user1: reciever, user2: sender },
        ],
      },
      { _id: 1 },
      { runValidators: true }
    )
    // console.log(con)
    message.time = Date.now().toString()
    if (con) {
      await Conversation.updateOne(
        {
          $or: [
            { user1: sender, user2: reciever },
            { user1: reciever, user2: sender },
          ],
        },
        { $push: { messages: message } },
        { runValidators: true }
      )
    } else {
      const mes = await Conversation.create({
        user1: sender,
        user2: reciever,
        messages: message,
      })
      console.log(mes)
    }

    if (checkUser(reciever)) {
      req.io.sockets
        .in(reciever)
        .emit('newMessage', message)
    }

    return res.status(200).json(message)
  } catch (error) {
    console.error(error)
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).map(
        (key) => ({
          [key]: error.errors[key].message,
        })
      )
      return res
        .status(400)
        .json({ message: 'Validation Error', errors })
    }
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Server Error' })
  }
}

async function getChatList(req, res) {
  try {
    const { username } = req.user
    // const re = new RegExp('^' + username + '|' + username + '$')
    const aggregatePipeline = [
      {
        $match: {
          $or: [{ user1: username }, { user2: username }],
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user1',
          foreignField: 'username',
          as: 'user1',
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'user2',
          foreignField: 'username',
          as: 'user2',
        },
      },
      { $unwind: '$user1' },
      { $unwind: '$user2' },
      {
        $project: {
          user1: { username: 1, name: 1 },
          user2: { username: 1, name: 1 },
        },
      },
    ]
    // const users = await Conversation.find(
    //   { $or: [{ user1: username }, { user2: username }] },
    //   { user1: 1, user2: 1 }
    // )
    let users = await Conversation.aggregate(
      aggregatePipeline
    )
    // console.log(users)
    users.forEach((user) => {
      if (user.user1.username === username) {
        delete user.user1
        user.user = user.user2
        delete user.user2
      } else {
        delete user.user2
        user.user = user.user1
        delete user.user1
      }
    })
    users = users.map((user) => ({
      _id: user._id,
      ...user.user,
    }))
    // console.log(users)
    return res.json(users)
  } catch (error) {
    console.error(error)
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).map(
        (key) => ({
          [key]: error.errors[key].message,
        })
      )
      return res
        .status(400)
        .json({ message: 'Validation Error', errors })
    }
    return res
      .status(error.statusCode || 500)
      .json({ message: error.message || 'Server Error' })
  }
}

async function searchUsers(req, res) {
  try {
    const { username } = req.user
    const { search } = req.query
    // console.log(
    //   JSON.stringify({
    //     $or: [{ name: search }, { username: search }],
    //   })
    // )
    // console.log('query', search)
    let users = await User.find(
      {
        $or: [{ name: search }, { username: search }],
      },
      { username: 1, name: 1 }
    )

    users = users.filter((ele) => ele.username !== username)

    return res.json({ message: 'success', users })
  } catch (error) {
    console.error(error)
    if (error.name === 'ValidationError') {
      const errors = Object.keys(error.errors).map(
        (key) => ({
          [key]: error.errors[key].message,
        })
      )
      return res
        .status(400)
        .json({ message: 'Validation Error', errors })
    }
    return res
      .status(500)
      .json({ message: error.message || 'Server Error' })
  }
}

export {
  getMessages,
  sendMessage,
  getChatList,
  searchUsers,
}
