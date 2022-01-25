const Validate = {
  email(value) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(value)
  },
  name(value) {
    const re = /^(?=[a-z\s]{2,70}$)/g
    return re.test(value)
  },
  username(value) {
    const re =
      /^(?=.{6,30}$)[a-z]+[.\-_@0-9]*[.\-_@0-9a-z]*$/
    return re.test(value)
  },
  password(value) {
    const re =
      /^(?=.*[~`!@#$%^&*():;"'?/.><,|\\])(?=.*[A-Z])[~`!@#$%^&*():;"'?/.><,|\\A-Za-z0-9]{8,}$/
    return re.test(value)
  },
}

const Errors = {
  email: 'Please enter a valid email',
  password:
    'Your password must be at least 8 character & includes at least one capital letter & one special character',
  username:
    'Username  shoud be b/w 6-30 character & includes only a-z,0-9, .-_@ characters',
  name: 'Name should be b/w 2-70 characters',
}

const ValidateConversation = {
  user: Validate.username,
  text(value) {
    // console.log(value)
    const re = /^(?=[a-z|A-Z\s]{1,250}$)/g
    return re.test(value)
  },
  timeStamp(value) {
    const re = /^(?=[0-9]{1,250}$)/g
    return re.test(value)
  },
}

const ConversationErrors = {
  user: 'sender field should be username',
  text: 'message text should be characters b/w 1-250 ',
  timeStamp: 'invalid timestamp',
}

const ValidatePost = {
  text(value) {
    const re = /^(?=[a-z|A-Z\s]{1,250}$)/g
    return re.test(value)
  },
  commentText(value) {
    return this.text(value)
  },
}

const PostErrors = {
  text: 'message text should be characters b/w 1-250',
  commentText:
    'comment text should be characters b/w 1-250',
}

const ValidateProfile = {}

const ProfileErrors = {}
export default Validate

export {
  Errors,
  ValidateConversation,
  ConversationErrors,
  ValidatePost,
  ValidateProfile,
  PostErrors,
  ProfileErrors,
}
