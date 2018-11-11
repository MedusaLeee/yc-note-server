const router = require('koa-router')()
const articleController = require('../controller/artcle.ctrl')

router.prefix('/articles')

router.post('/screen-shot', articleController.getScreenShot)
router.post('/', articleController.addArticle)
router.get('/', articleController.getList)

module.exports = router
