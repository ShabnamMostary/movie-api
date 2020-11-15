const movies = require('../movies')
const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovie = (request, response) => {
  const { input } = request.params
  let result = []
  const result1 = movies.filter((movie) => movie.title.toUpperCase().includes(input.toUpperCase()))


  const result2 = movies.filter((movie) => {
    for (let i = 0; i < movie.directors.length; i++) {
      if (movie.directors[i].toUpperCase().includes(input.toUpperCase())) {
        return true
      }
    }

    return false
  })

  result = result1.concat(result2)
  const foundMovie = result.filter((v, i, a) => a.indexOf(v) === i)

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
