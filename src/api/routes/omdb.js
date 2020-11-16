const axios = require('axios')
const cors = require('cors')
require('dotenv').config()

const corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200
}

module.exports = app => {
  app.get('/search', cors(corsOptions), (req, res) => {
    const queryParams = req.query.q
    const omdbUrl = `http://www.omdbapi.com/?apikey=${process.env.APIKEY}&s=${queryParams}`

    axios.get(omdbUrl)
      .then(resp => resp.data)
      .then(resp => res.status(200).json(resp))
      .catch(() => {
        return res.status(404).json({
          message: 'Failed request from omdb api.'
        })
      })
  })

  app.get('/*', (req, res) => {
    res.status(200).json({
      message: 'Access route /search with param ?q= to get results.'
    })
  })
}
