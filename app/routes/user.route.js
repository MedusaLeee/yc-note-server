const router = require('koa-router')()
const userController = require('../controller/user.ctrl')

router.prefix('/user')

router.post('/signup', userController.signup)

module.exports = router
