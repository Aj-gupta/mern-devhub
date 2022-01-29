const users = []

// function addSocketId({ socketId, username }) {
//   // console.log(socketId)
//   if (!users[username]) {
//     users[username] = []
//   }
//   users[username].push(socketId)
//   // console.log(users)
// }

function removeUser(username) {
  console.log('Before removing:', users)
  // console.log(users)
  const index = users.indexOf(username)
  if (index !== -1) {
    users.splice(index, 1)
  }
  if (users[username]) {
    delete users[username]
  }
  console.log('After removing:', users)
  // console.log(users)
}

function addUser(username) {
  console.log('Before adding:', users)
  if (users.indexOf(username) === -1) {
    users.push(username)
  } else {
    console.log('user already in the list.')
  }

  console.log('After adding:', users)
}
// function removeSocketId(socketId) {
//   const keys = Object.keys(users)
//   // console.log(users)
//   for (let i = 0; i < keys.length; i++) {
//     const username = keys[i]
//     // console.log(username)
//     const index = users[username].indexOf(socketId)
//     if (index !== -1) {
//       users[username].splice(index, 1)
//       if (users[username].length === 0) {
//         removeUser(username)
//       }
//       break
//     }
//   }
//   // console.log(users)
// }

// function getSocketIdsByUsername(username) {
//   return users[username]
// }

function checkUser(username) {
  return users.indexOf(username) !== -1
}

export { addUser, removeUser, checkUser }

// addSocketId({ socketId: 2, username: 'ajay' })
// console.log(users)
// addSocketId({ socketId: 3, username: 'bjay' })
// console.log(users)
// removeSocketId(3)
// console.log(users)
