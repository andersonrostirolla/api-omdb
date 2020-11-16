const express = require('express')
const bodyParser = require('body-parser')
const consign = require('consign')
require('dotenv').config()

module.exports = () => {
  const app = express()

  app.set('port', process.env.PORT || 8080)

  app.use(bodyParser.json())

  consign({ cwd: 'src/api' })
    .then('routes')
    .into(app)

  return app
}
