// src/components/ImagePopup.js
import React, { useState } from 'react';
import './imagePopup.css';

const ImagePopup = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-popup-overlay" onClick={onClose}>
      <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button className="nav-button prev" onClick={prevImage}>&#10094;</button>
        <button className="nav-button next" onClick={nextImage}>&#10095;</button>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ImagePopup;