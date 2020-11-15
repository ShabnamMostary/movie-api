const express = require('express')
const bodyParser = require('body-parser')
const { getAllMovies, getMovie, createNewMovie } = require('./controller/movies')
const app = express()

app.get('/movies', getAllMovies)
app.get('/movies/:input', getMovie)
app.post('/movies', bodyParser.json(), createNewMovie)
app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337')// eslint-disable-line no-console
})
