import React from 'react';

const MovieCard = ({ movie, onClick }) => {
    return (
        <div className="movie-card" onClick={() => onClick(movie)}>
            <img src={movie.posterURL} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <p>Note: {movie.rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;