// src/components/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} onClick={onMovieClick} />
      ))}
    </div>
  );
};

export default MovieList;
