const router = require('koa-router')()
const userController = require('../controller/user.ctrl')

router.prefix('/public')

router.post('/signup', userController.signup)
router.post('/signin', userController.signin)

module.exports = router
