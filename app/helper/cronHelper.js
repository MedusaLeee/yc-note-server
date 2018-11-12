const config = require('config')
const CronJob = require('cron').CronJob
const articlesService = require('../services/article.srv')
const logger = require('./log.helper').getLogger('CronHelper')

const articleCron = config.get('articleCron')

const articlePVResetJob = new CronJob(articleCron, async () => {
  await articlesService.resetArticlePV()
}, () => {
  logger.error('定时任务articlePVResetJob停止运行...')
}, false, 'Asia/Shanghai')

const startCron = () => {
  articlePVResetJob.start()
  logger.info('定时任务启动...')
}

module.exports = {
  startCron
}
