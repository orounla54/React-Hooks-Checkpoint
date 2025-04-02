import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                    <div className="movie-card">
                        <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p>{movie.description}</p>
                            <p>Note: {movie.rating}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;