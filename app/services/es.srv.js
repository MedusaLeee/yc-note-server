const config = require('config')
const esHelper = require('../helper/es.helper')
const temp = require('../elastic_search/template')
const notes = require('../elastic_search/notes')

const autoCreateTemplate = async () => {
  return esHelper.createTemplate('template_1', temp)
}

const autoCreateIndex = async () => {
  const isExists = await esHelper.existsIndex('notes')
  if (!isExists) {
    await esHelper.createIndex('notes', notes)
  }
}

const search = async (keyword, userId, from = 0, size = 10) => {
  const search = {
    index: config.get('esIndex'),
    type: config.get('esType'),
    _source: true,
    body: {
      query: {
        bool: {
          must: [
            {
              multi_match: {
                query: keyword,
                fields: ['title^2', 'content']
              }
            }
          ],
          minimum_should_match: 1,
          should: [
            {
              term: { userId }
            },
            {
              term: { isShare: true }
            }
          ]
        }
      },
      highlight: {
        fields: {
          content: {}
        },
        pre_tags: ['<span style="color:red">'],
        post_tags: ['</span>'],
        fragment_size: 50,
        number_of_fragments: 3
      }
    },
    from,
    size
  }
  const { hits } = await esHelper.matchQuery(search)
  return hits
}

module.exports = {
  autoCreateTemplate,
  autoCreateIndex,
  search
}
