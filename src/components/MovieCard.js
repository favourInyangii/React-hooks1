// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie, posterURL }) => {
  const { title, description, rating } = movie;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} style={{ width: '200px', height: '300px' }} />
      <div className="movie-details">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}/5</p>
      </div>
    </div>
  );
};

export default MovieCard;
