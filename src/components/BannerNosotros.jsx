import React from 'react';
import './Banner.css';
import bannerImage from '../assets/mision.png';

export default function Banner() {
  return (
    <img src={bannerImage} alt="Banner" className="banner-image" />
  );
}