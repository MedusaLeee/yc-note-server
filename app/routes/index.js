const router = require('koa-router')()
const { name, version } = require('../../package')
const publicRoute = require('./public')

const apiPrefix = '/api'

router.all('/', async (ctx) => {
  ctx.body = { name, version, status: Date() }
})

router.use(`${apiPrefix}`, publicRoute.routes())

module.exports = router
