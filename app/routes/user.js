const router = require('koa-router')()
const userController = require('../controller/user.ctrl')

router.prefix('/users')

router.get('/me', userController.getMe)

module.exports = router
