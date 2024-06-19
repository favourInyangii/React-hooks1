// src/components/MovieForm.js
import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPosterURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !posterURL) {
      alert('Please provide title and upload an image.');
      return;
    }

    const movie = {
      title,
      description,
      posterURL,
      rating: parseFloat(rating)
    };

    addMovie(movie);

    setTitle('');
    setDescription('');
    setPosterURL('');
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      {posterURL && (
        <img
          src={posterURL}
          alt="Preview"
          style={{ width: '150px', height: 'auto', marginBottom: '10px' }}
        />
      )}
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="0"
        max="5"
        step="0.1"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default MovieForm;
