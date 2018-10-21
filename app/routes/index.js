const router = require('koa-router')()
const { name, version } = require('../../package')
const userRoute = require('./user.route')

const apiPrefix = '/api'

router.all('/', async (ctx) => {
  ctx.body = { name, version, status: Date() }
})

router.use(`${apiPrefix}`, userRoute.routes())

module.exports = router
