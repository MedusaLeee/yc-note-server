const db = require('../db/pg')
const config = require('config')
const broswerHelper = require('../helper/browser.helper')

const getPageScreenShot = async (url) => {
  const { id, name } = await broswerHelper.getPageScreenShot(url)
  return {
    imageUrl: `${config.get('serverUrl')}/${name}`,
    id
  }
}

module.exports = {
  getPageScreenShot
}
