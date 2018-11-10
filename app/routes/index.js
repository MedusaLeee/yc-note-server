const router = require('koa-router')()
const { name, version } = require('../../package')
const publicRoute = require('./public')
const followRoute = require('./follow')
const articleRoute = require('./article')
const userRoute = require('./user')
const esRoute = require('./es')

const apiPrefix = '/api'

router.all('/', async (ctx) => {
  ctx.body = { name, version, status: Date() }
})

router.use(`${apiPrefix}`, publicRoute.routes())
router.use(`${apiPrefix}`, followRoute.routes())
router.use(`${apiPrefix}`, articleRoute.routes())
router.use(`${apiPrefix}`, userRoute.routes())
router.use(`${apiPrefix}`, esRoute.routes())

module.exports = router
