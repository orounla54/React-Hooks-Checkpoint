// src/App.jsx
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Casa de Papel",
      description: "Un voleur qui s'introduit dans les rêves des autres.",
      posterURL: "./src/assets/image.png",
      rating: 8.6,
      videoURL: "https://youtu.be/9ao4FEaDGhQ?si=ZqcQzvJhaJPKSM6Z"
    },
    {
      title: "Casa de Papel",
      description: "Un voleur qui s'introduit dans les rêves des autres.",
      posterURL: "./src/assets/image.png",
      rating: 8.6,
      videoURL: "https://youtu.be/9ao4FEaDGhQ?si=ZqcQzvJhaJPKSM6Z"
    },
    {
      title: "Casa de Papel",
      description: "Un voleur qui s'introduit dans les rêves des autres.",
      posterURL: "./src/assets/image.png",
      rating: 8.6,
      videoURL: "https://youtu.be/9ao4FEaDGhQ?si=ZqcQzvJhaJPKSM6Z"
    }
  ]);

  const [searchString, setSearchString] = useState('');
  const [rating, setRating] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleAddMovie = () => {
    const title = prompt("Titre du film :");
    const description = prompt("Description du film :");
    const posterURL = prompt("URL de l'affiche :");
    const movieRating = prompt("Note du film :");
    const videoURL = prompt("URL de la vidéo (YouTube) :");

    const newMovie = {
      title,
      description,
      posterURL,
      rating: movieRating,
      videoURL,
    };

    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchString.toLowerCase()) &&
    (rating ? movie.rating >= rating : true)
  );

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <h1>React Hooks Cinéma</h1>
      <Filter
        searchString={searchString}
        onSearchChange={(e) => setSearchString(e.target.value)}
        rating={rating}
        onRatingChange={(e) => setRating(e.target.value)}
      />
      <button onClick={handleAddMovie}>Ajouter un film</button>
      <MovieList movies={filteredMovies} onMovieClick={handleMovieClick} />

      {selectedMovie && (
        <div className="video-player">
          <h2>Lecture de : {selectedMovie.title}</h2>
          <iframe
            width="560"
            height="315"
            src={selectedMovie.videoURL}
            title={selectedMovie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button onClick={() => setSelectedMovie(null)}>Fermer</button>
        </div>
      )}
    </div>
  );
};

export default App;
