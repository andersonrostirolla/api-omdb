const axios = require('axios')
require('dotenv').config()

module.exports = app => {
  app.route('/search')
    .get((req, res) => {
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

  app.route('/*')
    .get((req, res) => {
      res.status(200).json({
        message: 'Access route /search with param ?q= to get results.'
      })
    })
}
