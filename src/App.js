// src/App.js
import React, { useState } from 'react';
import Filter from './components/Filter';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'INCEPTION',
      description: '"Inception," directed by Christopher Nolan, is a mind-bending science fiction thriller released in 2010. The film stars Leonardo DiCaprio as Dom Cobb, a skilled thief who specializes in the art of extraction: stealing valuable secrets from deep within the subconscious during the dream state.',
      posterURL: require('./assets/inception.jpg').default,
      rating: 4.5
    },
    {
      title: 'THE MATRIX',
      description: '"The Matrix," released in 1999 and directed by the Wachowskis, is a groundbreaking science fiction film that revolutionized action filmmaking and popular culture. The story follows Thomas Anderson, played by Keanu Reeves, a computer programmer by day and a hacker known as Neo by night.',
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
