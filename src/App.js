// src/App.js
import React, { useState } from 'react';
import Filter from './components/Filter';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'INCEPTION',
      description: 'Description of Movie 1',
      posterURL: require('./assets/inception.jpg').default,
      rating: 4.5
    },
    {
      title: 'THE MATRIX',
      description: 'Description of Movie 2',
      posterURL: require('./assets/matrix.jpg').default,
      rating: 4.8
    }
    // Add more movies as needed
  ]);

  const [filter, setFilter] = useState({
    title: '',
    rating: ''
  });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (!filter.rating || movie.rating >= parseFloat(filter.rating))
    );
  });

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <MovieList movies={filteredMovies} />
      <MovieForm addMovie={addMovie} />
    </div>
  );
};

export default App;
