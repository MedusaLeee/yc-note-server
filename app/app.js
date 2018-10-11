const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')
const koaLogger = require('koa-logger')
const cors = require('koa2-cors')
const errorHandle = require('./middleware/errorHandle.mid')
const loggerMiddleware = require('./middleware/logger.mid')
const index = require('./routes/index')

app.use(loggerMiddleware.responseLogger)
app.use(errorHandle)
app.use(cors({
  origin: () => '*',
  maxAge: 5,
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(koaLogger())
app.use(loggerMiddleware.requestLogger)
// routes
app.use(index.routes(), index.allowedMethods())

module.exports = app
