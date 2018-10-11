const router = require('koa-router')()
const { name, version } = require('../../package')
const testRoute = require('./test.route')

const apiPrefix = '/teacher'

router.all('/', async (ctx) => {
  ctx.body = { name, version, status: Date() }
})

router.use(apiPrefix, testRoute.routes())

module.exports = router
