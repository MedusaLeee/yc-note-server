const _ = require('lodash')
const articleService = require('../services/article.srv')

const getScreenShot = async (ctx) => {
  const { url } = ctx.request.body
  ctx.assert(!_.isEmpty(url), 400, 'url不能为空')
  const result = await articleService.getPageScreenShot(url)
  ctx.body = {
    success: true,
    data: result
  }
}

module.exports = {
  getScreenShot
}
