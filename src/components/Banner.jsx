import React from 'react';
import './Banner.css';
import bannerImage from '../assets/banner-allengroup.png';

export default function Banner() {
  return (
    <img src={bannerImage} alt="Banner" className="banner-image" />
  );
}