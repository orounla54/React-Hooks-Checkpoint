import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import MovieDetail from './components/MovieDetail';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Casa de Papel",
            description: "Un braquage épique mené par le Professeur.",
            posterURL: "./src/assets/image.png",
            rating: 8.6,
            videoURL: "https://youtu.be/9ao4FEaDGhQ"
        },
        {
          id: 2,
          title: "Casa de Papel",
          description: "Un braquage épique mené par le Professeur.",
          posterURL: "./src/assets/image.png",
          rating: 8.6,
          videoURL: "https://youtu.be/9ao4FEaDGhQ"
        },
        {
          id: 3,
          title: "Casa de Papel",
          description: "Un braquage épique mené par le Professeur.",
          posterURL: "./src/assets/image.png",
          rating: 8.6,
          videoURL: "https://youtu.be/9ao4FEaDGhQ"
        }
    ]);

    const [searchString, setSearchString] = useState('');
    const [rating, setRating] = useState('');

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchString.toLowerCase()) &&
        (rating ? movie.rating >= parseFloat(rating) : true)
    );

    return (
        <Router>
            <div className="App">
                <h1>React Hooks-Routes Cinéma</h1>
                <Filter
                    searchString={searchString}
                    onSearchChange={(e) => setSearchString(e.target.value)}
                    rating={rating}
                    onRatingChange={(e) => setRating(e.target.value)}
                />
                <Routes>
                    <Route path="/" element={<MovieList movies={filteredMovies} />} />
                    <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
