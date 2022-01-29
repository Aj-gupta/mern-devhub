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

const ValidateProfile = {
  company(value) {
    const re = /^(?=[a-z|A-Z|.\s]{1,100}$)/g
    return re.test(value)
  },
  website(value) {
    const re =
      /https?:\/\/?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
    return re.test(value)
  },
  location(value) {
    const re = /^(?=[a-z|A-Z\s]{1,50}$)/g
    return re.test(value)
  },
  status(value) {
    // console.log(value)
    const re = /^(?=[a-z|A-Z\s]{1,100}$)/g
    return re.test(value)
  },

  bio(value) {
    // const re = /^(?=[a-z|A-Z|\s]){10,500}$/g
    // return re.test(value)
    if (value) {
      return true
    }
    return false
  },
  githubUsername(value) {
    const re = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i
    return re.test(value)
  },
  experience: {
    title(value) {
      const re = /^(?=[a-z|A-Z\s]{2,40}$)/g
      return re.test(value)
    },
    description(value) {
      const re = /^(?=[a-z|A-Z|.\s]{10,500}$)/g
      return re.test(value)
    },
  },
  education: {
    school(value) {
      const re = /^(?=[a-z|A-Z\s]{2,40}$)/g
      return re.test(value)
    },
    degree(value) {
      const re = /^(?=[a-z|A-Z|.\s]{2,40}$)/g
      return re.test(value)
    },
    fieldOfStudy(value) {
      const re = /^(?=[a-z|A-Z\s]{2,40}$)/g
      return re.test(value)
    },
    description(value) {
      const re = /^(?=[a-z|A-Z|.\s]{10,500}$)/g
      return re.test(value)
    },
  },
}

const ProfileErrors = {
  company: 'company name should be b/w 1-100 character',
  website: 'please enter a correct url',
  location: 'location should be b/w 1-50 character',
  status: 'status should be b/w 1-100 character',

  bio: 'bio should be b/w 10-500 character',
  githubUsername: 'Please enter correct github username',
  experience: {
    title: 'title should be b/w 2-40 character',
    description:
      'description should be b/w 10-500 character',
  },
  education: {
    school: 'school should be b/w 2-40 character',
    degree: 'degree should be b/w 2-40 character',
    fieldOfStudy:
      'fieldOfStudy should be b/w 2-40 character',
    description:
      'description should be b/w 10-500 character',
  },
}
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
