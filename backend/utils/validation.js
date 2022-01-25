const Validate = {
  email(value) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(value)
  },
  name(value) {
    const re = /^(?=[a-z\s]{2,70}$)/
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

export default Validate

export { Errors }
