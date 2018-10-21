const db = require('../db/pg')
const cryptoHelper = require('../helper/crypto.helper')

const signup = async (username, password) => {
  const {
    password: p,
    salt
  } = cryptoHelper.encryptPassword(password)
  const user = await db.User.create({
    username,
    password: p,
    salt
  })
  return user.toJSON()
}

module.exports = {
  signup
}
