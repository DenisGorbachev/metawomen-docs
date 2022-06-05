const { getConfig } = require('./src/util/src/dotenv.cjs')

module.exports = async () => {
  const config = getConfig()
  Object.assign(process.env, config)
}
