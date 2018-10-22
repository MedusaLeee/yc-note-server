const pkg = require('../../package')
const logger = require('../helper/log.helper').getLogger('errorHandleMiddleware')
const { HttpRequestError, HttpResponseError } = require('../error')

module.exports = async (ctx, next) => {
  try {
    await next()
    const status = ctx.status || 404
    if (status === 404) {
      ctx.status = 404
      if (process.env.NODE_ENV === 'development') {
        ctx.body = pkg.apidoc
        return
      }
      ctx.throw(404)
    }
  } catch (err) {
    logger.error(err)
    const body = {
      success: false,
      msg: '系统繁忙',
      debug: '系统繁忙',
      type: ''
    }
    if (err instanceof HttpRequestError || err instanceof HttpResponseError) {
      ctx.status = 500
      ctx.body = body
      return
    }
    if (err.status) {
      ctx.status = err.status
      let msg = err.message
      if (ctx.status === 401) {
        msg = '请登录'
      }
      body.msg = msg
      body.debug = msg
      ctx.body = body
      return
    }
    ctx.status = 500
    ctx.body = body
  }
}
