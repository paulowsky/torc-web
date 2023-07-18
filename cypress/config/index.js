require('dotenv/config')

const TARGET = process.env.TARGET || 'dev'

module.exports = {
  TARGET,
  env: require(`./env/${TARGET}.json`)
}
