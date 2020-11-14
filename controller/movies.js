const movies = require('../movies')
const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovie = (request, response) => {
  const { input } = request.params

  const foundMovie = movies.filter((movie) => movie.title.toUpperCase().includes(input.toUpperCase()))

  return response.send(foundMovie)
}
const createNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('Following items are required title,directors,releaseDate,rating,runtime & genres')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMovie, createNewMovie }
