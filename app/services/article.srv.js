const db = require('../db/pg')
const esClient = require('../db/es')
const config = require('config')
const browserHelper = require('../helper/browser.helper')

const getPageScreenShot = async (url) => {
  const { name, title } = await browserHelper.getPageInfo(url)
  return {
    imageUrl: `${config.get('serverUrl')}/${name}`,
    name,
    title
  }
}

const addArticle = async ({ userId, type, description = '', link, imageName, isShare }) => {
  const { title, bodyText } = await browserHelper.getPageContent(link)
  const body = {
    userId,
    type,
    title,
    description,
    link,
    thumbPath: imageName,
    isShare
  }
  const article = await db.Article.create(body)
  // 插入es
  body.content = bodyText
  body.createdAt = Date.now()
  const esBody = {
    index: config.get('esIndex'),
    type: config.get('esType'),
    id: article.id,
    body
  }
  await esClient.create(esBody)
  return article.id
}

module.exports = {
  getPageScreenShot,
  addArticle
}
