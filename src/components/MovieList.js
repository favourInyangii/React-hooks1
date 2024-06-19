// src/components/MovieList.js
import React from 'react';
import poster1 from '../assets/inception.jpg'; // Adjust path as per your project structure
import poster2 from '../assets/matrix.jpg';
import MovieCard from './MovieCard';


const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          movie={movie}
          posterURL={index === 0 ? poster1 : poster2} // Example dynamic assignment based on index
        />
      ))}
    </div>
  );
};

export default MovieList;
