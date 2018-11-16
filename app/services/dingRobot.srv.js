const db = require('../db/pg')

const addRobot = async (userId, name, hookUrl) => {
  await db.DingRobot.create({
    userId,
    name,
    hookUrl
  })
}

const publish = async (userId) => {
  const follows = await db.Follow.findAll({
    userId
  })
  const types = follows.map(f => f.type)
  const list = await db.ArticlePV.findAll({
    limit: 3,
    include: [
      {
        model: db.Article,
        as: 'article',
        where: {
          isShare: true,
          type: {
            $in: types
          }
        },
        include: [
          { model: db.User, as: 'user' }
        ]
      }
    ],
    order: [['dayPV', 'DESC']]
  })
  return list
}

module.exports = {
  addRobot,
  publish
}
