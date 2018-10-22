const db = require('../db/pg')
const { CheckError } = require('../error')
const cryptoHelper = require('../helper/crypto.helper')

const signup = async (username, password) => {
  const {
    password: p,
    salt
  } = cryptoHelper.encryptPassword(password)
  let user = await db.User.findOne({ username })
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

module.exports = {
  signup
}
