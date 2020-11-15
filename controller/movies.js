const movies = require('../movies')
const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getMovie = (request, response) => {
  const { input } = request.params

  const foundMovie = movies.filter((movie) => { // filter function is for each movie.line 10-19 will run for each movie.
    if (movie.title.toUpperCase().includes(input.toUpperCase())) { // search for input in the title,return true if found
      return true // if the condition is false it will enter the for loop next.If true, it will move to next movie.
    }
    for (let i = 0; i < movie.directors.length; i++) { // search for input in the the directors array,return true if found
      if (movie.directors[i].toUpperCase().includes(input.toUpperCase())) {
        return true
      }
    }

    return false // return false if input is not in the movie title or directors array
  })

  if (foundMovie.length >= 1) {
    return response.send(foundMovie)
  } else {
    return response.send('No movies found!')
  }
}
const createNewMovie = (request, response) => {
  const {
    title, directors, releaseDate, rating, runTime, genres
  } = request.body

  if (!title || !directors || !releaseDate || !rating || !runTime || !genres) {
    return response.status(400).send('Following items are required title,directors,releaseDate,rating,runTime & genres')
  }
  const newMovie = {
    title, directors, releaseDate, rating, runTime, genres
  }

  movies.push(newMovie)

  return response.status(201).send(newMovie)
}

module.exports = { getAllMovies, getMovie, createNewMovie }
