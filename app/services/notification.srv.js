const db = require('../db/pg')
const _ = require('lodash')
const config = require('config')

const addNotification = async (articleId, type, transaction) => {
  const followList = await db.Follow.findAll({ where: { type } })
  const notificationArr = _.chain(followList)
    .map(f => f.userId)
    .uniq()
    .map(f => {
      return {
        userId: f,
        articleId
      }
    })
    .value()
  await db.Notification.bulkCreate(notificationArr, { transaction })
}

const getNotificationListByUserId = async (userId) => {
  const list = await db.Notification.findAll({
    where: { userId },
    include: [
      {
        model: db.User,
        as: 'user'
      },
      {
        model: db.Article,
        as: 'article'
      }
    ],
    limit: 3
  })
  if (_.isEmpty(list)) {
    return []
  }
  return list.map(n => {
    const { user, article } = n.toJSON()
    return {
      id: n.id,
      username: user.username,
      title: article.title,
      description: article.description,
      link: article.link,
      thumbPath: `${config.get('serverUrl')}/${article.thumbPath}`
    }
  })
}

module.exports = {
  addNotification,
  getNotificationListByUserId
}
