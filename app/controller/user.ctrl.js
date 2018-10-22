const _ = require('lodash')
const userService = require('../services/user.srv')

const signup = async (ctx) => {
  const { username, password, confirmPassword } = ctx.request.body
  ctx.assert(!_.isEmpty(username), 400, '用户名不能为空')
  ctx.assert(!_.isEmpty(password), 400, '密码不能为空')
  ctx.assert(!_.isEmpty(confirmPassword), 400, '确认密码不能为空')
  ctx.assert(password === confirmPassword, 400, '密码与确认密码不相等')
  await userService.signup(username, password)
  ctx.body = {
    success: true
  }
}

module.exports = {
  signup
}
