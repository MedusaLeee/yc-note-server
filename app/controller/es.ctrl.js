const esService = require('../services/es.srv')

const search = async (ctx) => {
  const { keyword, from = 0, size = 10 } = ctx.request.query
  ctx.assert(!!keyword, 400, 'keyword必须')
  const userId = ctx.state.user.id
  const resBody = await esService.search(keyword, userId, from, size)
  ctx.body = {
    success: true,
    data: resBody
  }
}

module.exports = {
  search
}
