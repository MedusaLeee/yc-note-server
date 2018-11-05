const puppeteer = require('puppeteer')
const uuidv4 = require('uuid/v4')
const path = require('path')
const Promise = require('bluebird')

class BrowserHelper {
  constructor (baseDirPath) {
    this.baseDirPath = baseDirPath
    this.browser = null
    // this.init().then()
  }
  async init () {
    this.browser = await puppeteer.launch({
      // 设置超时时间
      timeout: 15000,
      // 如果是访问https页面 此属性会忽略https错误
      ignoreHTTPSErrors: true,
      // 打开开发者工具, 当此值为true时, headless总为false
      devtools: false,
      // 关闭headless模式, 会打开浏览器
      headless: true
    })
  }
  getJPGPath () {
    return `${this.baseDirPath}/${uuidv4()}-${Date.now()}.jpg`
  }
  async getPageScreenShot (url) {
    const filePath = this.getJPGPath()
    const screensPage = await this.browser.newPage()
    await screensPage.setViewport({
      width: 1440,
      height: 900
    })
    await screensPage.goto(url)
    await screensPage.screenshot({
      path: filePath,
      type: 'jpeg',
      clip: {
        x: 0,
        y: 0,
        width: 1440,
        height: 1440
      }
    })
    await screensPage.close()
    return filePath
  }
  async getPageContent (url) {
    const contentPage = await this.browser.newPage()
    await contentPage.setRequestInterception(true)
    contentPage.on('request', request => {
      if (request.resourceType() === 'image') {
        request.abort()
      } else {
        request.continue()
      }
    })
    await contentPage.goto('http://yc345.tv/student.html')
    const title = await contentPage.title()
    const body = await contentPage.$('html')
    const bodyHtml = await contentPage.evaluate(body => body.innerText, body)
    await contentPage.close()
    return {
      url,
      title,
      bodyHtml
    }
  }
  async getPageInfo (url) {
    const [imagePath, shot] = await Promise.all([
      this.getPageScreenShot(url),
      this.getPageContent(url)
    ])
    return {
      url,
      imagePath,
      ...shot
    }
  }
}

const browser = new BrowserHelper(path.join(__dirname, '../public'))

module.exports = {
  getPageInfo: browser.getPageInfo.bind(browser)
}