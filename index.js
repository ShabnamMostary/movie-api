const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, createNewMovie } = require('./controller/movies')
const app = express()

app.get('/movies', getAllMovies)
app.post('/movies', bodyParser.json(), createNewMovie)

app.listen(1337, () => {
  console.log('Listening on port 1337')// eslint-disable-line no-console
})
