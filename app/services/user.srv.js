const db = require('../db/pg')
const config = require('config')
const { CheckError } = require('../error')
const cryptoHelper = require('../helper/crypto.helper')
const jwtHelper = require('../helper/jwt.helper')

const signup = async (username, password) => {
  const {
    password: p,
    salt
  } = cryptoHelper.autoEncryptPassword(password)
  let user = await db.User.findOne({ where: { username } })
  if (user) {
    throw new CheckError(400, '用户名已存在')
  }
  user = await db.User.create({
    username,
    password: p,
    salt
  })
  return user.toJSON()
}

const signin = async (username, password) => {
  const user = await db.User.findOne({ where: { username } })
  if (!user) {
    throw new CheckError(400, '用户名密码错误')
  }
  const {
    password: p
  } = cryptoHelper.encryptPassword(password, user.salt)
  if (p !== user.password) {
    throw new CheckError(400, '用户名密码错误')
  }
  return 'Bearer ' + jwtHelper.sign({ id: user.id, username }, config.get('jwtSignKey'))
}

module.exports = {
  signup,
  signin
}
