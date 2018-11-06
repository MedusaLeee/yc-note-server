const db = require('../db/pg')
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
  const { id } = await db.Article.create({
    userId,
    type,
    title,
    description,
    link,
    thumbPath: imageName,
    isShare
  })
  return id
}

module.exports = {
  getPageScreenShot,
  addArticle
}
