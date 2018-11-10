const _ = require('lodash')
const userService = require('../services/user.srv')

const signup = async (ctx) => {
  const { username, password, confirmPassword, types } = ctx.request.body
  ctx.assert(!_.isEmpty(username), 400, '用户名不能为空')
  ctx.assert(!_.isEmpty(password), 400, '密码不能为空')
  ctx.assert(!_.isEmpty(confirmPassword), 400, '确认密码不能为空')
  ctx.assert(password === confirmPassword, 400, '密码与确认密码不相等')
  ctx.assert(!_.isEmpty(types), 400, '关注类型不能为空')
  await userService.signup(username, password, types)
  ctx.body = {
    success: true
  }
}

const signin = async (ctx) => {
  const { username, password } = ctx.request.body
  ctx.assert(!_.isEmpty(username), 400, '用户名不能为空')
  ctx.assert(!_.isEmpty(password), 400, '密码不能为空')
  ctx.body = {
    success: true,
    data: {
      token: await userService.signin(username, password)
    }
  }
}

module.exports = {
  signup,
  signin
}
