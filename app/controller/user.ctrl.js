const _ = require('lodash')
const userService = require('../services/user.srv')

const signup = async (ctx) => {
  const { username, password, confirmPassword } = ctx.request.body
  ctx.assert(!_.isEmpty(username), 400, 'username不能为空')
  ctx.assert(!_.isEmpty(password), 400, 'password不能为空')
  ctx.assert(!_.isEmpty(confirmPassword), 400, 'confirmPassword不能为空')
  ctx.assert(password === confirmPassword, 400, 'password与confirmPassword不相等')
  await userService.signup(username, password)
  ctx.body = {
    success: true
  }
}

module.exports = {
  signup
}
