const express = require('express')
const { getAllMovies } = require('./controller/movies')
const app = express()

app.get('/movies', getAllMovies)

app.listen(1337, () => {
  console.log('Listening on port 1337')// eslint-disable-line no-console
})
