const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
const cors = require('cors')
require('dotenv').config()

module.exports = () => {
  const app = express()

  app.set('port', process.env.PORT || 8080)
  app.use(cors())
  app.use(bodyParser.json())

  consign({ cwd: 'src/api' })
    .then('routes')
    .into(app)

  return app
}
