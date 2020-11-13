const { request, response } = require('express')
const movies = require('../movies')
const getAllMovies = (request, response) => {
  return response.send(movies)
}

module.exports = { getAllMovies }
